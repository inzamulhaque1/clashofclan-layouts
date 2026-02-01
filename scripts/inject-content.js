const fs = require('fs');
const path = require('path');

const guidesPath = path.join(__dirname, '..', 'lib', 'guides.js');
let guides = fs.readFileSync(guidesPath, 'utf8');

// Read new content
const cwlContent = fs.readFileSync(path.join(__dirname, 'cwl-content.txt'), 'utf8').trim();
const anti3Content = fs.readFileSync(path.join(__dirname, 'anti3-content.txt'), 'utf8').trim();
const legendContent = fs.readFileSync(path.join(__dirname, 'legend-content.txt'), 'utf8').trim();

// Function to replace content between backticks in a specific article
function replaceArticleContent(fileContent, articleKey, newContent) {
  // Find the article
  const articleStart = fileContent.indexOf(`'${articleKey}':`);
  if (articleStart === -1) {
    console.log(`❌ Article ${articleKey} not found`);
    return fileContent;
  }

  // Find "content: `" after the article start
  const contentStart = fileContent.indexOf('content: `', articleStart);
  if (contentStart === -1) {
    console.log(`❌ Content start not found for ${articleKey}`);
    return fileContent;
  }

  // Find the closing backtick and comma
  const backtickStart = contentStart + 'content: `'.length;

  // Find matching closing backtick - look for `,\n  },` pattern after a backtick
  let depth = 1;
  let pos = backtickStart;
  while (pos < fileContent.length && depth > 0) {
    if (fileContent[pos] === '`') {
      // Check if this is the closing backtick (followed by comma and closing brace)
      const after = fileContent.substring(pos, pos + 20);
      if (after.match(/^`,?\s*\r?\n\s*\}/)) {
        depth = 0;
        break;
      }
    }
    pos++;
  }

  if (depth !== 0) {
    console.log(`❌ Closing backtick not found for ${articleKey}`);
    return fileContent;
  }

  // Replace content
  const before = fileContent.substring(0, backtickStart);
  const after = fileContent.substring(pos);

  console.log(`✅ ${articleKey} content replaced`);
  return before + '\n' + newContent + '\n    ' + after;
}

// Replace each article's content
guides = replaceArticleContent(guides, 'cwl-base-building-tips', cwlContent);
guides = replaceArticleContent(guides, 'anti-3-star-base-design', anti3Content);
guides = replaceArticleContent(guides, 'legend-league-pushing', legendContent);

// Write back
fs.writeFileSync(guidesPath, guides);
console.log('\n✅ All content injected!');
