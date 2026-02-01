const fs = require('fs');
const path = require('path');

const guidesPath = path.join(__dirname, '..', 'lib', 'guides.js');
let content = fs.readFileSync(guidesPath, 'utf8');

// Read content files
const cwlContent = fs.readFileSync(path.join(__dirname, 'cwl-content.txt'), 'utf8').trim();
const anti3Content = fs.readFileSync(path.join(__dirname, 'anti3-content.txt'), 'utf8').trim();
const legendContent = fs.readFileSync(path.join(__dirname, 'legend-content.txt'), 'utf8').trim();

// New article definitions with all metadata
const newCWLArticle = `'cwl-base-building-tips': {
    title: 'CWL Base Building Tips 2026: The Ultimate Anti-3 Star Guide',
    description: 'Master CWL base building with anti-3 star design principles. Learn defense spreading, trap placement, and compartment design for Clan War League success.',
    metaDescription: 'CWL base building tips 2026: Anti-3 star design principles, defense spreading, trap placement & compartment strategies for Clan War League success.',
    category: 'Defense',
    icon: '🏰',
    image: GUIDE_IMAGES['cwl-base-building-tips'],
    contentImages: [
      'https://i.ytimg.com/vi/JnM0mn4caEA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpjFUJZOzmu8gQbnoN6-lzeYGObA',
      'https://i.ytimg.com/vi/oMD16duHzJc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD6DTA-dT2_g_vWCLQkggLTo1How',
      'https://i.ytimg.com/vi/dY2LtvLHGpk/sddefault.jpg',
      'https://darkbarbarian.com/wp-content/uploads/2025/01/storages-2.jpg',
      'https://i.ytimg.com/vi/XNXzE9ClgCE/sddefault.jpg'
    ],
    content: \`
${cwlContent}
    \`,
  }`;

const newAnti3Article = `'anti-3-star-base-design': {
    title: 'Anti 3-Star Base Design Principles: Complete 2026 Guide',
    description: 'Master anti-3 star base design with proven principles. Learn time wasting, defense spreading, compartment design, and trap psychology to stop 3-stars.',
    metaDescription: 'Anti 3-Star base design principles 2026: Time wasting, defense spreading, compartments & trap placement. Build bases that force 2-stars consistently.',
    category: 'Defense',
    icon: '🛡️',
    image: GUIDE_IMAGES['anti-3-star-base-design'],
    contentImages: [
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/3087482.jpg?457',
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/3305026_orig.jpg',
      'https://i.ytimg.com/vi/KpoWkDq2SR4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf623FwsgQiacbhKCoZc2RXkNkWA',
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/145780771.png',
      'https://preview.redd.it/base-types-best-island-box-type-ring-v0-fw4qbg2rvnob1.jpg?width=1080&crop=smart&auto=webp&s=172f0c4945a8dad26e2cc886351c5b587141f6bc',
      'https://i.ytimg.com/vi/HWbECabjA-M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLgDlEXu8othAwsK_VFpGxRxVdcg'
    ],
    content: \`
${anti3Content}
    \`,
  }`;

const newLegendArticle = `'legend-league-pushing': {
    title: 'Legend League Pushing Guide 2026: Complete Trophy Blueprint',
    description: 'Master Legend League with our complete 2026 guide. Push to 5000+ trophies, learn daily routines, best strategies, and climb the global leaderboard.',
    metaDescription: 'Legend League pushing guide 2026: Reach 5000+ trophies with our complete blueprint. Daily routines, best strategies, and pro tips for CoC success.',
    category: 'Trophy',
    icon: '🏆',
    image: GUIDE_IMAGES['legend-league-pushing'],
    contentImages: [
      'https://static.wikia.nocookie.net/clashofclans/images/1/13/Trophy_Leagues_Main_Banner.png/revision/latest?cb=20171220173449',
      'https://preview.redd.it/attack-stratergies-used-by-top-legend-league-players-v0-gjrzdc81a4gc1.jpeg?width=640&crop=smart&auto=webp&s=ac296ebc1afb985c86bc59653f87a0d7020d1c27',
      'https://preview.redd.it/legend-league-players-do-you-use-a-custom-display-base-or-v0-zj3lxgcwwd8f1.jpeg?width=2400&format=pjpg&auto=webp&s=47dc36ed720312c302c0197f38556b4a7bec539d',
      'https://external-preview.redd.it/legends-league-top-10-leaderboard-armies-april-2023-v0-A8Z6ry93xzS5aPWu_JUp8a2jxP16bxxVU-p3_C0ZJHo.jpg?auto=webp&s=10418adf76d13b89355b8565f1b98214d8520562',
      'https://i.ytimg.com/vi/IoZZ2vm7cec/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCjOtPVrYVzhLsay1AGl_3dAW72Dw'
    ],
    content: \`
${legendContent}
    \`,
  }`;

// Find the start of GUIDES export object (skip GUIDE_IMAGES)
const guidesExportStart = content.indexOf('export const GUIDES = {');
if (guidesExportStart === -1) {
  console.log('❌ Could not find GUIDES export');
  process.exit(1);
}
console.log('Found GUIDES export at position:', guidesExportStart);

// Function to find and replace an article - only search AFTER guidesExportStart
function replaceArticle(fileContent, articleKey, newArticle, searchStartPos) {
  // Find the start of the article AFTER the GUIDES export
  const startPattern = `'${articleKey}':`;
  const startIndex = fileContent.indexOf(startPattern, searchStartPos);

  if (startIndex === -1) {
    console.log(`❌ Article ${articleKey} not found after position ${searchStartPos}`);
    return fileContent;
  }

  // Find the end of the article by counting braces
  let braceCount = 0;
  let foundFirstBrace = false;
  let endIndex = startIndex;

  for (let i = startIndex; i < fileContent.length; i++) {
    const char = fileContent[i];

    // Skip content inside template literals
    if (char === '`') {
      i++;
      while (i < fileContent.length && fileContent[i] !== '`') {
        if (fileContent[i] === '\\' && fileContent[i+1] === '`') {
          i++; // Skip escaped backtick
        }
        i++;
      }
      continue;
    }

    // Skip strings
    if (char === "'" || char === '"') {
      const quote = char;
      i++;
      while (i < fileContent.length && fileContent[i] !== quote) {
        if (fileContent[i] === '\\') {
          i++; // Skip escape character
        }
        i++;
      }
      continue;
    }

    if (char === '{') {
      braceCount++;
      foundFirstBrace = true;
    } else if (char === '}') {
      braceCount--;
      if (foundFirstBrace && braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }

  // Find the trailing comma if present
  let trailingIndex = endIndex;
  while (trailingIndex < fileContent.length && /[\s,]/.test(fileContent[trailingIndex])) {
    if (fileContent[trailingIndex] === ',') {
      trailingIndex++;
      break;
    }
    trailingIndex++;
  }

  // Replace
  const before = fileContent.substring(0, startIndex);
  const after = fileContent.substring(trailingIndex);

  console.log(`✅ Replacing ${articleKey}`);
  console.log(`   Position: ${startIndex} - ${trailingIndex}`);

  return before + newArticle + ',\n\n  ' + after;
}

// Replace each article - search only AFTER GUIDES export start
console.log('\nStarting article replacement...\n');

content = replaceArticle(content, 'cwl-base-building-tips', newCWLArticle, guidesExportStart);
content = replaceArticle(content, 'anti-3-star-base-design', newAnti3Article, guidesExportStart);
content = replaceArticle(content, 'legend-league-pushing', newLegendArticle, guidesExportStart);

// Update hero images in GUIDE_IMAGES object
const imageUpdates = [
  {
    old: "'cwl-base-building-tips': 'https://i.ytimg.com/vi/MvzwmoZt4l8/maxresdefault.jpg'",
    new: "'cwl-base-building-tips': 'https://i.ytimg.com/vi/hzkHDkNW5OY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAm4JnNzQj3nvMShnFF9Q04I0hyag'"
  },
  {
    old: "'anti-3-star-base-design': 'https://clashcodes.com/wp-content/uploads/2024/06/th16-legend-league-base.jpeg'",
    new: "'anti-3-star-base-design': 'https://clashcodes.com/uploads/bases/th17anti3stars-baselinks-coc2025.jpg'"
  },
  {
    old: "'legend-league-pushing': 'https://cdn.clashchamps.com/wp-content/uploads/2024/03/CC-Desktop-BG-3.jpeg'",
    new: "'legend-league-pushing': 'https://i.ytimg.com/vi/Y97HUuzCRO4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAI1IZ1mfUkwJLo3It48YOB2gt9vw'"
  }
];

console.log('\nUpdating hero images...');
for (const update of imageUpdates) {
  if (content.includes(update.old)) {
    content = content.replace(update.old, update.new);
    console.log(`✅ Updated hero image`);
  }
}

// Write back
fs.writeFileSync(guidesPath, content);
console.log('\n✅ All articles replaced successfully!');

// Verify
const verifyContent = fs.readFileSync(guidesPath, 'utf8');
console.log('\n--- Verification ---');
console.log('CWL title updated:', verifyContent.includes('CWL Base Building Tips 2026'));
console.log('Anti-3 title updated:', verifyContent.includes('Anti 3-Star Base Design Principles: Complete 2026 Guide'));
console.log('Legend title updated:', verifyContent.includes('Legend League Pushing Guide 2026'));
console.log('CWL metaDescription present:', verifyContent.includes("metaDescription: 'CWL base building tips 2026"));
console.log('Anti-3 contentImages present:', verifyContent.includes('clashcodes.com/wp-content'));
console.log('Legend contentImages present:', verifyContent.includes('clashchamps.com'));

// Count words in content sections
const cwlMatch = verifyContent.match(/## CWL Base Building Tips 2026[\s\S]*?(?=\n    `,)/);
const anti3Match = verifyContent.match(/## Anti 3-Star Base Design[\s\S]*?(?=\n    `,)/);
const legendMatch = verifyContent.match(/## Legend League Pushing Guide 2026[\s\S]*?(?=\n    `,)/);

if (cwlMatch) console.log('CWL word count:', cwlMatch[0].split(/\s+/).length);
if (anti3Match) console.log('Anti-3 word count:', anti3Match[0].split(/\s+/).length);
if (legendMatch) console.log('Legend word count:', legendMatch[0].split(/\s+/).length);
