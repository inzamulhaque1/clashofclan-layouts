import * as fs from "fs";
import * as path from "path";
import { config } from "./config";
import { generatePinImage, type PinData } from "./pin-generator";
import { createPin, ensureValidToken } from "./pinterest-api";

// Import base and guide data
import { baseLayouts, builderBaseLayouts } from "../../lib/bases";
import { cocGuides } from "../../lib/guides";
import { images } from "../../lib/images";

const POSTED_LOG_PATH = path.join(__dirname, "posted.json");
const RESULTS_LOG_PATH = path.join(__dirname, "last-run.json");

// TH/BH type labels for descriptions
const BASE_TYPE_LABELS: Record<string, string> = {
  war: "War",
  farming: "Farming",
  trophy: "Trophy",
  cwl: "CWL",
  hybrid: "Hybrid",
  "anti-3-star": "Anti 3-Star",
  "anti-2-star": "Anti 2-Star",
  versus: "Versus",
  "trophy-push": "Trophy Push",
};

// Load posted log
function loadPostedLog(): Set<string> {
  try {
    if (fs.existsSync(POSTED_LOG_PATH)) {
      const data = JSON.parse(fs.readFileSync(POSTED_LOG_PATH, "utf-8"));
      return new Set(data.posted || []);
    }
  } catch {}
  return new Set();
}

// Save posted log
function savePostedLog(posted: Set<string>): void {
  fs.writeFileSync(
    POSTED_LOG_PATH,
    JSON.stringify({ posted: Array.from(posted), lastUpdated: new Date().toISOString() }, null, 2)
  );
}

// Build all possible pins from bases and guides
function buildAllPins(): PinData[] {
  const pins: PinData[] = [];
  const { siteUrl } = config.posting;

  // Home Village bases
  for (const base of baseLayouts) {
    const imageUrl = images.bases?.[`th${base.thLevel}-${base.type}-1`] || base.image;
    pins.push({
      id: `hv-${base.slug}`,
      type: "hv-base",
      title: base.title,
      subtitle: `Town Hall ${base.thLevel} ${BASE_TYPE_LABELS[base.type] || base.type} Base`,
      imageUrl: base.image,
      pageUrl: `${siteUrl}/clash-of-clans/bases/base/${base.slug}`,
      rating: base.rating,
      thLevel: base.thLevel,
      baseType: base.type,
      description: `${base.title} - Best TH${base.thLevel} ${BASE_TYPE_LABELS[base.type] || base.type} base layout for Clash of Clans 2026. Free copy link included. ${base.description}`,
      hashtags: [
        "ClashOfClans",
        "COC",
        `TH${base.thLevel}`,
        "BaseLayout",
        BASE_TYPE_LABELS[base.type]?.replace(/\s+/g, "") || base.type,
        "ClashOfClansBase",
        "COC2026",
      ],
    });
  }

  // Builder Base layouts
  for (const base of builderBaseLayouts) {
    pins.push({
      id: `bh-${base.slug}`,
      type: "bh-base",
      title: base.title,
      subtitle: `Builder Hall ${base.bhLevel} ${BASE_TYPE_LABELS[base.type] || base.type} Base`,
      imageUrl: base.image,
      pageUrl: `${siteUrl}/clash-of-clans/bases/base/${base.slug}`,
      rating: base.rating,
      bhLevel: base.bhLevel,
      baseType: base.type,
      description: `${base.title} - Best BH${base.bhLevel} Builder Base layout for Clash of Clans 2026. Free copy link. ${base.description}`,
      hashtags: [
        "ClashOfClans",
        "COC",
        `BH${base.bhLevel}`,
        "BuilderBase",
        "COCBuilderBase",
        "COC2026",
      ],
    });
  }

  // Guides
  for (const guide of cocGuides) {
    pins.push({
      id: `guide-${guide.slug}`,
      type: "guide",
      title: guide.title.replace(/ — .*$/, ""), // Shorten for pin
      subtitle: `${guide.category} Guide | ${guide.readTime}`,
      imageUrl: guide.image,
      pageUrl: `${siteUrl}/clash-of-clans/guides/${guide.slug}`,
      description: `${guide.description} Read the full guide at Game365Hub.`,
      hashtags: [
        "ClashOfClans",
        "COC",
        "COCGuide",
        "ClashOfClansStrategy",
        "COC2026",
        "MobileGaming",
      ],
    });
  }

  return pins;
}

// Select random pins that haven't been posted yet
function selectPins(allPins: PinData[], posted: Set<string>): PinData[] {
  const { pinsPerRun } = config.posting;

  // Filter out already posted
  let available = allPins.filter((p) => !posted.has(p.id));

  // If all posted, reset and start over
  if (available.length === 0) {
    console.log("All pins posted! Resetting log for recycling.");
    posted.clear();
    available = allPins;
  }

  // Shuffle and pick 1 pin per run
  const shuffled = available.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, pinsPerRun);
}

// Main posting function
async function main() {
  console.log("=== Pinterest Auto-Poster ===");
  console.log(`Time: ${new Date().toISOString()}`);

  // Verify token (auto-refreshes if expired)
  const tokenValid = await ensureValidToken();
  if (!tokenValid) {
    console.error("Pinterest access token is invalid and refresh failed!");
    process.exit(1);
  }
  console.log("Token verified.");

  const { boardId } = config.pinterest;
  if (!boardId) {
    console.error("No board ID configured!");
    process.exit(1);
  }

  // Load tracking data
  const posted = loadPostedLog();
  console.log(`Previously posted: ${posted.size} pins`);

  // Build all possible pins
  const allPins = buildAllPins();
  console.log(`Total available pins: ${allPins.length}`);

  // Select today's pins
  const todayPins = selectPins(allPins, posted);
  console.log(`Selected ${todayPins.length} pins for today`);

  const results: Array<{
    id: string;
    title: string;
    success: boolean;
    pinId?: string;
    error?: string;
  }> = [];

  for (const pin of todayPins) {
    console.log(`\nPosting: ${pin.title}`);

    try {
      // Generate branded pin image
      console.log("  Generating image...");
      const imageBuffer = await generatePinImage(pin);
      const imageBase64 = imageBuffer.toString("base64");

      // Build description with hashtags
      const fullDescription = `${pin.description}\n\n${pin.hashtags.map((h) => `#${h}`).join(" ")}`;

      // Post to Pinterest
      console.log("  Uploading to Pinterest...");
      const result = await createPin({
        title: pin.title,
        description: fullDescription,
        link: pin.pageUrl,
        boardId,
        imageBase64,
      });

      if (result.success) {
        console.log(`  Posted! Pin ID: ${result.pinId}`);
        posted.add(pin.id);
        results.push({
          id: pin.id,
          title: pin.title,
          success: true,
          pinId: result.pinId,
        });
      } else {
        console.error(`  Failed: ${result.error}`);
        results.push({
          id: pin.id,
          title: pin.title,
          success: false,
          error: result.error,
        });
      }

      // Small delay between posts to be respectful to API
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(`  Error: ${message}`);
      results.push({
        id: pin.id,
        title: pin.title,
        success: false,
        error: message,
      });
    }
  }

  // Save updated posted log
  savePostedLog(posted);

  // Save run results
  const runLog = {
    timestamp: new Date().toISOString(),
    totalPosted: results.filter((r) => r.success).length,
    totalFailed: results.filter((r) => !r.success).length,
    totalTracked: posted.size,
    totalAvailable: allPins.length,
    results,
  };
  fs.writeFileSync(RESULTS_LOG_PATH, JSON.stringify(runLog, null, 2));

  console.log(`\n=== Done ===`);
  console.log(`Posted: ${runLog.totalPosted}/${todayPins.length}`);
  console.log(`Failed: ${runLog.totalFailed}`);
  console.log(`Total tracked: ${posted.size}/${allPins.length}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
