const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'lib', 'guides.js');
let c = fs.readFileSync(file, 'utf8');

// Update GUIDE_IMAGES
c = c.replace(
  "'cwl-base-building-tips': 'https://coc.guide/static/imgs/other/clan-castle-9.png'",
  "'cwl-base-building-tips': 'https://i.ytimg.com/vi/hzkHDkNW5OY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAm4JnNzQj3nvMShnFF9Q04I0hyag'"
);
c = c.replace(
  "'anti-3-star-base-design': 'https://coc.guide/static/imgs/defense/eagle-artillery-5.png'",
  "'anti-3-star-base-design': 'https://clashcodes.com/uploads/bases/th17anti3stars-baselinks-coc2025.jpg'"
);
c = c.replace(
  "'legend-league-pushing': 'https://coc.guide/static/imgs/other/trophy.png'",
  "'legend-league-pushing': 'https://i.ytimg.com/vi/Y97HUuzCRO4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAI1IZ1mfUkwJLo3It48YOB2gt9vw'"
);
console.log('✅ Images updated');

// Update CWL title and add meta
c = c.replace(
  "title: 'CWL Base Building Tips - Build Anti-3 Star Bases'",
  "title: 'CWL Base Building Tips 2026: Build Anti-3 Star Bases That Win Wars'"
);
c = c.replace(
  "description: 'Learn how to build effective Clan War League bases that defend against 3-stars. Anti-3 star design principles for all Town Hall levels.'",
  "description: 'Learn how to build effective Clan War League bases that defend against 3-stars. Anti-3 star design principles for all Town Hall levels.',\r\n    metaDescription: 'Master CWL base building in 2026. Anti-3 star design, trap placement & defense tips for TH12-TH18 in Clan War Leagues.'"
);

// Add contentImages to CWL
c = c.replace(
  "image: GUIDE_IMAGES['cwl-base-building-tips'],\r\n    content:",
  `image: GUIDE_IMAGES['cwl-base-building-tips'],
    contentImages: [
      'https://i.ytimg.com/vi/JnM0mn4caEA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpjFUJZOzmu8gQbnoN6-lzeYGObA',
      'https://i.ytimg.com/vi/oMD16duHzJc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD6DTA-dT2_g_vWCLQkggLTo1How',
      'https://i.ytimg.com/vi/dY2LtvLHGpk/sddefault.jpg',
      'https://darkbarbarian.com/wp-content/uploads/2025/01/storages-2.jpg',
      'https://i.ytimg.com/vi/XNXzE9ClgCE/sddefault.jpg'
    ],
    content:`
);
console.log('✅ CWL metadata updated');

// Update Anti-3-Star title and add meta
c = c.replace(
  "title: 'Anti 3-Star Base Design Principles'",
  "title: 'Anti 3-Star Base Design Principles 2026: Complete Defense Guide'"
);
c = c.replace(
  "description: 'Master the art of designing bases that are nearly impossible to 3-star. Learn compartment design, trap placement, and defense spacing.'",
  "description: 'Master the art of designing bases that are nearly impossible to 3-star. Learn compartment design, trap placement, and defense spacing.',\r\n    metaDescription: 'Learn anti 3-star base design for CoC 2026. Master compartments, traps & defense spacing to stop all meta attacks.'"
);

// Add contentImages to Anti-3-Star
c = c.replace(
  "image: GUIDE_IMAGES['anti-3-star-base-design'],\r\n    content:",
  `image: GUIDE_IMAGES['anti-3-star-base-design'],
    contentImages: [
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/3087482.jpg?457',
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/3305026_orig.jpg',
      'https://i.ytimg.com/vi/KpoWkDq2SR4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf623FwsgQiacbhKCoZc2RXkNkWA',
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/145780771.png',
      'https://preview.redd.it/base-types-best-island-box-type-ring-v0-fw4qbg2rvnob1.jpg?width=1080&crop=smart&auto=webp&s=172f0c4945a8dad26e2cc886351c5b587141f6bc',
      'https://i.ytimg.com/vi/HWbECabjA-M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLgDlEXu8othAwsK_VFpGxRxVdcg'
    ],
    content:`
);
console.log('✅ Anti-3-Star metadata updated');

// Update Legend League title and add meta
c = c.replace(
  "title: 'Legend League Pushing Guide'",
  "title: 'Legend League Pushing Guide 2026: Reach & Dominate 5000+ Trophies'"
);
c = c.replace(
  "description: 'How to reach and succeed in Legend League. Trophy pushing strategies, base selection, and attack timing tips for CoC.'",
  "description: 'How to reach and succeed in Legend League. Trophy pushing strategies, base selection, and attack timing tips for CoC.',\r\n    metaDescription: 'Master Legend League in CoC 2026. Trophy pushing, best armies, base defense & daily routines for 5000+ trophies.'"
);

// Add contentImages to Legend League
c = c.replace(
  "image: GUIDE_IMAGES['legend-league-pushing'],\r\n    content:",
  `image: GUIDE_IMAGES['legend-league-pushing'],
    contentImages: [
      'https://static.wikia.nocookie.net/clashofclans/images/1/13/Trophy_Leagues_Main_Banner.png/revision/latest?cb=20171220173449',
      'https://preview.redd.it/attack-stratergies-used-by-top-legend-league-players-v0-gjrzdc81a4gc1.jpeg?width=640&crop=smart&auto=webp&s=ac296ebc1afb985c86bc59653f87a0d7020d1c27',
      'https://preview.redd.it/legend-league-players-do-you-use-a-custom-display-base-or-v0-zj3lxgcwwd8f1.jpeg?width=2400&format=pjpg&auto=webp&s=47dc36ed720312c302c0197f38556b4a7bec539d',
      'https://external-preview.redd.it/legends-league-top-10-leaderboard-armies-april-2023-v0-A8Z6ry93xzS5aPWu_JUp8a2jxP16bxxVU-p3_C0ZJHo.jpg?auto=webp&s=10418adf76d13b89355b8565f1b98214d8520562',
      'https://i.ytimg.com/vi/IoZZ2vm7cec/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCjOtPVrYVzhLsay1AGl_3dAW72Dw'
    ],
    content:`
);
console.log('✅ Legend League metadata updated');

fs.writeFileSync(file, c);
console.log('\n✅ All metadata and images updated!');
