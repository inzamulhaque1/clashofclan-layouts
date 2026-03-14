import sharp from "sharp";
import { config } from "./config";

interface PinData {
  id: string;
  type: "hv-base" | "bh-base" | "guide";
  title: string;
  subtitle: string;
  imageUrl: string;
  pageUrl: string;
  rating?: number;
  thLevel?: number;
  bhLevel?: number;
  baseType?: string;
  description: string;
  hashtags: string[];
}

// Pin dimensions — 1000x1150 (compact, minimal dead space)
const PIN_W = 1000;
const PIN_H = 1150;
const IMG_TOP = 80;
const IMG_H = 650;
const IMG_PAD = 30;
const IMG_W = PIN_W - IMG_PAD * 2; // 940

export async function generatePinImage(pin: PinData): Promise<Buffer> {
  const { accentColor, textColor, mutedColor } = config.brand;

  // Fetch image with retry
  let imageBuffer: Buffer | undefined;
  let imageFetched = false;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(pin.imageUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
          "Referer": "https://www.google.com/",
        },
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      imageBuffer = Buffer.from(await res.arrayBuffer());
      if (imageBuffer.length > 1000) {
        imageFetched = true;
        break;
      }
    } catch (e) {
      console.log(`  Image fetch attempt ${attempt + 1} failed: ${e instanceof Error ? e.message : "unknown"}`);
      if (attempt < 2) await new Promise((r) => setTimeout(r, 1500));
    }
  }

  const levelText = pin.thLevel ? `TH${pin.thLevel}` : pin.bhLevel ? `BH${pin.bhLevel}` : "COC";
  const badgeText = pin.type === "guide" ? "GUIDE" : pin.baseType?.toUpperCase() || "BASE";

  // Placeholder if no image
  if (!imageFetched || !imageBuffer) {
    const placeholderSvg = `
      <svg width="${IMG_W}" height="${IMG_H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#1a2332" stop-opacity="1"/>
            <stop offset="100%" stop-color="#0d1117" stop-opacity="1"/>
          </radialGradient>
        </defs>
        <rect width="${IMG_W}" height="${IMG_H}" rx="12" fill="url(#glow)"/>
        <rect x="3" y="3" width="${IMG_W - 6}" height="${IMG_H - 6}" rx="10" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.4"/>
        <!-- Grid dots -->
        ${Array.from({ length: 8 }, (_, r) =>
          Array.from({ length: 10 }, (_, c) =>
            `<circle cx="${100 + c * 80}" cy="${100 + r * 70}" r="2" fill="${accentColor}" opacity="0.15"/>`
          ).join("")
        ).join("")}
        <text x="${IMG_W / 2}" y="${IMG_H / 2 - 30}" font-family="Arial Black, Arial, sans-serif" font-size="120" font-weight="900" fill="${accentColor}" text-anchor="middle" opacity="0.7">${escapeXml(levelText)}</text>
        <text x="${IMG_W / 2}" y="${IMG_H / 2 + 40}" font-family="Arial Black, Arial, sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" opacity="0.5">${escapeXml(badgeText)} LAYOUT</text>
      </svg>
    `;
    imageBuffer = await sharp(Buffer.from(placeholderSvg)).png().toBuffer();
  }

  // Resize image to fit the pin frame (no color modification)
  const baseImage = await sharp(imageBuffer)
    .resize(IMG_W, IMG_H, { fit: "cover" })
    .png()
    .toBuffer();

  // Title
  const titleLines = wrapText(pin.title.toUpperCase(), 28);
  const ratingStars = pin.rating ? "★".repeat(Math.floor(pin.rating)) + (pin.rating % 1 >= 0.5 ? "½" : "") : "";
  const ratingText = pin.rating ? `${ratingStars} ${pin.rating.toFixed(1)}` : "";

  // Layout positions
  const textAreaTop = IMG_TOP + IMG_H + 30; // 790
  const titleY = textAreaTop + 45;
  const titleEndY = titleY + (titleLines.length - 1) * 50;
  const subtitleY = titleEndY + 40;
  const ratingY = subtitleY + 45;
  const ctaY = pin.rating ? ratingY + 50 : subtitleY + 55;

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="${PIN_W / 2}" y="${titleY + i * 50}" font-family="Arial Black, Arial, sans-serif" font-size="36" font-weight="900" fill="${textColor}" text-anchor="middle" letter-spacing="0.5">${escapeXml(line)}</text>`
    )
    .join("\n");

  // Full badge text
  const fullBadge = `${levelText} • ${badgeText}`;

  const svgOverlay = `
    <svg width="${PIN_W}" height="${PIN_H}" xmlns="http://www.w3.org/2000/svg">
      <!-- Header background -->
      <rect x="0" y="0" width="${PIN_W}" height="${IMG_TOP}" fill="#0a0a0f"/>
      <!-- Text area background -->
      <rect x="0" y="${IMG_TOP + IMG_H}" width="${PIN_W}" height="${PIN_H - IMG_TOP - IMG_H}" fill="#0a0a0f"/>

      <!-- Top accent bar -->
      <rect x="0" y="0" width="${PIN_W}" height="5" fill="${accentColor}"/>
      <text x="${IMG_PAD}" y="52" font-family="Arial Black, Arial, sans-serif" font-size="24" font-weight="900" fill="${accentColor}" letter-spacing="2">GAME365HUB</text>
      <!-- Badge pill -->
      <rect x="${PIN_W - IMG_PAD - 180}" y="22" width="180" height="36" rx="18" fill="${accentColor}"/>
      <text x="${PIN_W - IMG_PAD - 90}" y="47" font-family="Arial Black, Arial, sans-serif" font-size="15" font-weight="900" fill="${textColor}" text-anchor="middle">${escapeXml(fullBadge)}</text>

      <!-- Image border/frame -->
      <rect x="${IMG_PAD - 4}" y="${IMG_TOP - 4}" width="${IMG_W + 8}" height="${IMG_H + 8}" rx="15" fill="${accentColor}" opacity="0.6"/>

      <!-- (image composited below this SVG layer) -->

      <!-- Divider -->
      <rect x="80" y="${textAreaTop}" width="${PIN_W - 160}" height="3" rx="1.5" fill="${accentColor}" opacity="0.5"/>

      <!-- Title -->
      ${titleSvg}

      <!-- Subtitle -->
      <text x="${PIN_W / 2}" y="${subtitleY}" font-family="Arial, sans-serif" font-size="21" fill="${mutedColor}" text-anchor="middle">${escapeXml(pin.subtitle)}</text>

      <!-- Rating -->
      ${ratingText ? `<text x="${PIN_W / 2}" y="${ratingY}" font-family="Arial, sans-serif" font-size="28" fill="#FBBF24" text-anchor="middle">${escapeXml(ratingText)}</text>` : ""}

      <!-- CTA Button -->
      <rect x="250" y="${ctaY}" width="500" height="54" rx="27" fill="${accentColor}"/>
      <text x="${PIN_W / 2}" y="${ctaY + 36}" font-family="Arial Black, Arial, sans-serif" font-size="20" font-weight="900" fill="${textColor}" text-anchor="middle">VIEW BASE + COPY LINK</text>

      <!-- Bottom branding -->
      <text x="${PIN_W / 2}" y="${PIN_H - 25}" font-family="Arial, sans-serif" font-size="15" fill="${mutedColor}" text-anchor="middle" opacity="0.5">game365hub.com — Your Mobile Gaming Hub</text>

      <!-- Bottom accent bar -->
      <rect x="0" y="${PIN_H - 4}" width="${PIN_W}" height="4" fill="${accentColor}"/>
    </svg>
  `;

  const pinImage = await sharp({
    create: {
      width: PIN_W,
      height: PIN_H,
      channels: 4,
      background: { r: 10, g: 10, b: 15, alpha: 1 },
    },
  })
    .composite([
      {
        input: baseImage,
        top: IMG_TOP,
        left: IMG_PAD,
      },
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .png({ quality: 90 })
    .toBuffer();

  return pinImage;
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxChars) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
  }
  if (current) lines.push(current.trim());
  return lines.slice(0, 3);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export type { PinData };
