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

// Generate a branded pin image as a Buffer
export async function generatePinImage(pin: PinData): Promise<Buffer> {
  const { width, height, bgColor, accentColor, textColor, mutedColor } = config.brand;

  // Fetch the base/guide image with retry and User-Agent
  let imageBuffer: Buffer;
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
      if (attempt < 2) await new Promise((r) => setTimeout(r, 1000));
    }
  }

  // Create a styled placeholder if image fetch fails
  if (!imageFetched) {
    const levelText = pin.thLevel ? `TH${pin.thLevel}` : pin.bhLevel ? `BH${pin.bhLevel}` : "COC";
    const placeholderSvg = `
      <svg width="860" height="560" xmlns="http://www.w3.org/2000/svg">
        <rect width="860" height="560" fill="#1a1a2e"/>
        <rect x="2" y="2" width="856" height="556" rx="12" fill="none" stroke="${accentColor}" stroke-width="2" opacity="0.4"/>
        <text x="430" y="240" font-family="Arial Black, Arial, sans-serif" font-size="120" font-weight="900" fill="${accentColor}" text-anchor="middle" opacity="0.8">${levelText}</text>
        <text x="430" y="320" font-family="Arial, sans-serif" font-size="32" fill="${mutedColor}" text-anchor="middle">BASE LAYOUT</text>
        <text x="430" y="380" font-family="Arial, sans-serif" font-size="22" fill="${mutedColor}" text-anchor="middle" opacity="0.6">game365hub.com</text>
      </svg>
    `;
    imageBuffer = await sharp(Buffer.from(placeholderSvg)).png().toBuffer();
  }

  // Resize the fetched image to fit the pin (860x560 area)
  const baseImage = await sharp(imageBuffer!)
    .resize(860, 560, { fit: "cover" })
    .png()
    .toBuffer();

  // Build the title lines (word wrap at ~28 chars)
  const titleLines = wrapText(pin.title.toUpperCase(), 28);
  const titleSvgLines = titleLines
    .map(
      (line, i) =>
        `<text x="500" y="${920 + i * 55}" font-family="Arial Black, Arial, sans-serif" font-size="42" font-weight="900" fill="${textColor}" text-anchor="middle" letter-spacing="1">${escapeXml(line)}</text>`
    )
    .join("\n");

  // Subtitle
  const subtitleY = 920 + titleLines.length * 55 + 15;

  // Rating stars
  const ratingStars = pin.rating ? "★".repeat(Math.floor(pin.rating)) + (pin.rating % 1 >= 0.5 ? "½" : "") : "";
  const ratingText = pin.rating ? `${ratingStars} ${pin.rating.toFixed(1)}` : "";

  // Badge text based on type
  const badgeText = pin.type === "guide" ? "STRATEGY GUIDE" : pin.baseType?.toUpperCase() || "BASE LAYOUT";
  const levelText = pin.thLevel ? `TH${pin.thLevel}` : pin.bhLevel ? `BH${pin.bhLevel}` : "";

  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgColor}" stop-opacity="1"/>
          <stop offset="100%" stop-color="${bgColor}" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${bgColor}" stop-opacity="0"/>
          <stop offset="100%" stop-color="${bgColor}" stop-opacity="1"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="${bgColor}"/>

      <!-- Top accent line -->
      <rect x="0" y="0" width="${width}" height="6" fill="${accentColor}"/>

      <!-- Site branding -->
      <text x="500" y="70" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900" fill="${accentColor}" text-anchor="middle" letter-spacing="4">GAME365HUB.COM</text>

      <!-- Level badge -->
      ${levelText ? `
      <rect x="370" y="95" width="260" height="45" rx="22" fill="${accentColor}"/>
      <text x="500" y="125" font-family="Arial Black, Arial, sans-serif" font-size="22" font-weight="900" fill="${textColor}" text-anchor="middle">${escapeXml(levelText)} ${escapeXml(badgeText)}</text>
      ` : `
      <rect x="370" y="95" width="260" height="45" rx="22" fill="${accentColor}"/>
      <text x="500" y="125" font-family="Arial Black, Arial, sans-serif" font-size="22" font-weight="900" fill="${textColor}" text-anchor="middle">${escapeXml(badgeText)}</text>
      `}

      <!-- Image border glow -->
      <rect x="62" y="172" width="876" height="576" rx="16" fill="${accentColor}" opacity="0.3"/>

      <!-- Title -->
      ${titleSvgLines}

      <!-- Subtitle -->
      <text x="500" y="${subtitleY}" font-family="Arial, sans-serif" font-size="24" fill="${mutedColor}" text-anchor="middle">${escapeXml(pin.subtitle)}</text>

      <!-- Rating -->
      ${ratingText ? `
      <text x="500" y="${subtitleY + 55}" font-family="Arial, sans-serif" font-size="28" fill="#FBBF24" text-anchor="middle">${escapeXml(ratingText)}</text>
      ` : ""}

      <!-- Bottom CTA -->
      <rect x="300" y="${height - 130}" width="400" height="55" rx="27" fill="${accentColor}"/>
      <text x="500" y="${height - 96}" font-family="Arial Black, Arial, sans-serif" font-size="20" font-weight="900" fill="${textColor}" text-anchor="middle">FREE COPY LINK</text>

      <!-- Bottom branding -->
      <text x="500" y="${height - 40}" font-family="Arial, sans-serif" font-size="18" fill="${mutedColor}" text-anchor="middle">game365hub.com — Your Mobile Gaming Hub</text>

      <!-- Bottom accent line -->
      <rect x="0" y="${height - 6}" width="${width}" height="6" fill="${accentColor}"/>
    </svg>
  `;

  // Composite: background + base image + SVG overlay
  const pinImage = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 10, g: 10, b: 15, alpha: 1 },
    },
  })
    .composite([
      {
        input: baseImage,
        top: 175,
        left: 70,
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

// Word wrap helper
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
  return lines;
}

// XML escape helper
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export type { PinData };
