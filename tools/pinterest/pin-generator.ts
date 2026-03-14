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

const PIN_W = 1000;
const PIN_H = 1200;
const IMG_PAD = 0;
const IMG_W = PIN_W;
const IMG_H = 720;

export async function generatePinImage(pin: PinData): Promise<Buffer> {
  const { accentColor, textColor, mutedColor } = config.brand;

  // Fetch image
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

  // Placeholder
  if (!imageFetched || !imageBuffer) {
    const phSvg = `
      <svg width="${IMG_W}" height="${IMG_H}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#1a3a2a"/>
            <stop offset="50%" stop-color="#1a2a1a"/>
            <stop offset="100%" stop-color="#2a3a1a"/>
          </linearGradient>
        </defs>
        <rect width="${IMG_W}" height="${IMG_H}" fill="url(#bg)"/>
        ${Array.from({ length: 12 }, (_, r) =>
          Array.from({ length: 14 }, (_, c) =>
            `<rect x="${30 + c * 70}" y="${30 + r * 60}" width="40" height="40" rx="4" fill="#2a4a2a" opacity="0.3"/>`
          ).join("")
        ).join("")}
        <rect x="${IMG_W / 2 - 140}" y="${IMG_H / 2 - 80}" width="280" height="160" rx="20" fill="#0a0a0f" opacity="0.7"/>
        <text x="${IMG_W / 2}" y="${IMG_H / 2 - 10}" font-family="Arial Black, Arial, sans-serif" font-size="80" font-weight="900" fill="#4ade80" text-anchor="middle">${escapeXml(levelText)}</text>
        <text x="${IMG_W / 2}" y="${IMG_H / 2 + 40}" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle">${escapeXml(badgeText)} LAYOUT</text>
      </svg>
    `;
    imageBuffer = await sharp(Buffer.from(phSvg)).png().toBuffer();
  }

  // Resize image — no color modification
  const baseImage = await sharp(imageBuffer)
    .resize(IMG_W, IMG_H, { fit: "cover" })
    .png()
    .toBuffer();

  // Text layout
  const titleLines = wrapText(pin.title.toUpperCase(), 30);
  const ratingStars = pin.rating ? "★".repeat(Math.floor(pin.rating)) + (pin.rating % 1 >= 0.5 ? "½" : "") : "";
  const ratingText = pin.rating ? `${ratingStars} ${pin.rating.toFixed(1)}` : "";

  const textTop = IMG_H + 40;
  const titleY = textTop + 5;
  const titleEndY = titleY + (titleLines.length - 1) * 48;
  const subtitleY = titleEndY + 38;
  const ratingY = subtitleY + 40;
  const ctaY = pin.rating ? ratingY + 55 : subtitleY + 55;

  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="${PIN_W / 2}" y="${titleY + i * 48}" font-family="Arial Black, Arial, sans-serif" font-size="38" font-weight="900" fill="${textColor}" text-anchor="middle">${escapeXml(line)}</text>`
    )
    .join("\n");

  const svgOverlay = `
    <svg width="${PIN_W}" height="${PIN_H}" xmlns="http://www.w3.org/2000/svg">
      <!-- White/light bottom section -->
      <rect x="0" y="${IMG_H}" width="${PIN_W}" height="${PIN_H - IMG_H}" fill="#111116"/>

      <!-- Gradient overlay on bottom of image for smooth transition -->
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#111116" stop-opacity="0"/>
          <stop offset="100%" stop-color="#111116" stop-opacity="0.85"/>
        </linearGradient>
      </defs>
      <rect x="0" y="${IMG_H - 120}" width="${PIN_W}" height="120" fill="url(#fade)"/>

      <!-- Top overlay bar (semi-transparent on image) -->
      <rect x="0" y="0" width="${PIN_W}" height="60" fill="#000000" opacity="0.5"/>
      <text x="24" y="40" font-family="Arial Black, Arial, sans-serif" font-size="20" font-weight="900" fill="${textColor}" letter-spacing="2">GAME365HUB</text>
      <rect x="${PIN_W - 24 - 150}" y="14" width="150" height="32" rx="16" fill="${accentColor}"/>
      <text x="${PIN_W - 24 - 75}" y="37" font-family="Arial Black, Arial, sans-serif" font-size="14" font-weight="900" fill="${textColor}" text-anchor="middle">${escapeXml(levelText)} • ${escapeXml(badgeText)}</text>

      <!-- Title -->
      ${titleSvg}

      <!-- Subtitle -->
      <text x="${PIN_W / 2}" y="${subtitleY}" font-family="Arial, sans-serif" font-size="20" fill="${mutedColor}" text-anchor="middle">${escapeXml(pin.subtitle)}</text>

      <!-- Rating -->
      ${ratingText ? `<text x="${PIN_W / 2}" y="${ratingY}" font-family="Arial, sans-serif" font-size="26" fill="#FBBF24" text-anchor="middle">${escapeXml(ratingText)}</text>` : ""}

      <!-- CTA Button -->
      <rect x="220" y="${ctaY}" width="560" height="52" rx="26" fill="${accentColor}"/>
      <text x="${PIN_W / 2}" y="${ctaY + 34}" font-family="Arial Black, Arial, sans-serif" font-size="19" font-weight="900" fill="${textColor}" text-anchor="middle">VIEW BASE + FREE COPY LINK</text>

      <!-- Bottom URL -->
      <text x="${PIN_W / 2}" y="${PIN_H - 20}" font-family="Arial, sans-serif" font-size="14" fill="${mutedColor}" text-anchor="middle" opacity="0.5">game365hub.com</text>

      <!-- Top + bottom accent lines -->
      <rect x="0" y="0" width="${PIN_W}" height="4" fill="${accentColor}"/>
      <rect x="0" y="${PIN_H - 3}" width="${PIN_W}" height="3" fill="${accentColor}"/>
    </svg>
  `;

  const pinImage = await sharp({
    create: {
      width: PIN_W,
      height: PIN_H,
      channels: 4,
      background: { r: 17, g: 17, b: 22, alpha: 1 },
    },
  })
    .composite([
      { input: baseImage, top: 0, left: 0 },
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
    ])
    .png({ quality: 85 })
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
