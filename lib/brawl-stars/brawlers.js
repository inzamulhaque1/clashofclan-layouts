// Brawl Stars Brawlers Database - Updated February 2026
// Data sourced from Brawl Stars Wiki (Fandom), Noff.gg, Brawl Time Ninja, and Liquipedia
// Images from PixelCrux - pixelcrux.com

export const BRAWLER_CLASSES = {
  'damage-dealer': { name: 'Damage Dealer', icon: '💥', color: '#EF4444', description: 'High damage output with varied range attacks' },
  'tank': { name: 'Tank', icon: '🛡️', color: '#3B82F6', description: 'High HP brawlers that soak damage and control crowds' },
  'assassin': { name: 'Assassin', icon: '🗡️', color: '#8B5CF6', description: 'Fast and deadly, excel at eliminating targets quickly' },
  'support': { name: 'Support', icon: '💚', color: '#10B981', description: 'Heal and buff teammates for better survivability' },
  'controller': { name: 'Controller', icon: '🎯', color: '#F59E0B', description: 'Control zones and deny enemy movement' },
  'marksman': { name: 'Marksman', icon: '🔫', color: '#EC4899', description: 'Long-range specialists with high precision' },
  'artillery': { name: 'Artillery', icon: '💣', color: '#F97316', description: 'Attack over walls with splash damage' },
  'hybrid': { name: 'Hybrid', icon: '⚡', color: '#06B6D4', description: 'Versatile brawlers with multiple roles' },
};

export const TIERS = {
  S: { name: 'S Tier', color: '#FF6B6B', description: 'Dominate every mode - must pick/ban' },
  A: { name: 'A Tier', color: '#4ECDC4', description: 'Strong and reliable in most situations' },
  B: { name: 'B Tier', color: '#45B7D1', description: 'Solid performers, good in right hands' },
  C: { name: 'C Tier', color: '#96CEB4', description: 'Situational picks, require skill' },
  D: { name: 'D Tier', color: '#9E9E9E', description: 'Weak in current meta' },
};

export const RARITIES = {
  'starting': { name: 'Starting Brawler', color: '#9E9E9E' },
  'rare': { name: 'Rare', color: '#10B981' },
  'super-rare': { name: 'Super Rare', color: '#3B82F6' },
  'epic': { name: 'Epic', color: '#8B5CF6' },
  'mythic': { name: 'Mythic', color: '#EF4444' },
  'legendary': { name: 'Legendary', color: '#F59E0B' },
  'chromatic': { name: 'Chromatic', color: '#EC4899' },
};

// Image URLs from PixelCrux - Working direct URLs
const IMG_BASE = 'https://pixelcrux.com/Brawl_Stars/Images/Brawlers/Med';
const IMG_PORT = 'https://pixelcrux.com/Brawl_Stars/Images/Brawler_Portraits/Med';

// Use portrait images (cleaner for tier lists)
const img = (name) => `${IMG_PORT}/${name}.png`;

// Complete Brawlers List - February 2026 Meta
export const BRAWLERS = [
  // S-TIER (Meta Dominating)
  { id: 'spike', name: 'Spike', class: 'damage-dealer', rarity: 'legendary', tier: 'S', winRate: 64.2, useRate: 12.5, image: img('Spike'), description: 'Area control master with cactus grenades', bestModes: ['Gem Grab', 'Brawl Ball', 'Hot Zone'], starPowers: ['Fertilize', 'Curveball'], gadgets: ['Popping Pincushion', 'Life Plant'], hp: 3200, damage: 520, speed: 'Normal', range: 'Long' },
  { id: 'mortis', name: 'Mortis', class: 'assassin', rarity: 'mythic', tier: 'S', winRate: 62.8, useRate: 18.3, image: img('Mortis'), description: 'Dashing vampire with incredible mobility', bestModes: ['Brawl Ball', 'Gem Grab', 'Bounty'], starPowers: ['Creepy Harvest', 'Coiled Snake'], gadgets: ['Combo Spinner', 'Survival Shovel'], hp: 5600, damage: 1260, speed: 'Very Fast', range: 'Short' },
  { id: 'emz', name: 'Emz', class: 'controller', rarity: 'epic', tier: 'S', winRate: 63.5, useRate: 15.1, image: img('Emz'), description: 'Spray queen with zone denial abilities', bestModes: ['Hot Zone', 'Gem Grab', 'Brawl Ball'], starPowers: ['Bad Karma', 'Hype'], gadgets: ['Friendzoner', 'Acid Spray'], hp: 4200, damage: 700, speed: 'Normal', range: 'Long' },
  { id: 'buster', name: 'Buster', class: 'tank', rarity: 'chromatic', tier: 'S', winRate: 65.4, useRate: 7.9, image: img('Buster'), description: 'Shield-wielding protector with counter attacks', bestModes: ['Brawl Ball', 'Gem Grab', 'Knockout'], starPowers: ['Blockbuster', 'Shieldbreaker'], gadgets: ['Utility Belt', 'Shield Bash'], hp: 7000, damage: 1400, speed: 'Normal', range: 'Short' },
  { id: 'gray', name: 'Gray', class: 'support', rarity: 'chromatic', tier: 'S', winRate: 64.8, useRate: 6.5, image: img('Gray'), description: 'Dimensional teleporter with portal abilities', bestModes: ['Gem Grab', 'Knockout', 'Brawl Ball'], starPowers: ['Walking Cane', 'New Perspective'], gadgets: ['Grand Piano', 'Fake Injury'], hp: 4200, damage: 980, speed: 'Normal', range: 'Long' },
  { id: 'cordelius', name: 'Cordelius', class: 'assassin', rarity: 'mythic', tier: 'S', winRate: 63.1, useRate: 8.2, image: img('Cordelius'), description: 'Shadow realm master trapping enemies', bestModes: ['Showdown', 'Gem Grab', 'Knockout'], starPowers: ['Replanting', 'Comboshrooms'], gadgets: ['Poison Mushroom', 'Mushroom Kingdom'], hp: 4800, damage: 1260, speed: 'Fast', range: 'Normal' },

  // A-TIER (Strong Picks)
  { id: 'colt', name: 'Colt', class: 'damage-dealer', rarity: 'starting', tier: 'A', winRate: 58.9, useRate: 14.2, image: img('Colt'), description: 'Dual-wielding gunslinger with piercing bullets', bestModes: ['Heist', 'Bounty', 'Knockout'], starPowers: ['Slick Boots', 'Magnum Special'], gadgets: ['Speedloader', 'Silver Bullet'], hp: 3200, damage: 420, speed: 'Normal', range: 'Long' },
  { id: 'piper', name: 'Piper', class: 'marksman', rarity: 'epic', tier: 'A', winRate: 57.8, useRate: 10.6, image: img('Piper'), description: 'Elegant sniper dealing more damage at range', bestModes: ['Bounty', 'Knockout', 'Showdown'], starPowers: ['Ambush', 'Snappy Sniping'], gadgets: ['Auto Aimer', 'Homemade Recipe'], hp: 2800, damage: 2128, speed: 'Normal', range: 'Very Long' },
  { id: 'byron', name: 'Byron', class: 'support', rarity: 'mythic', tier: 'A', winRate: 57.2, useRate: 8.9, image: img('Byron'), description: 'Snake oil salesman healing allies and poisoning enemies', bestModes: ['Gem Grab', 'Bounty', 'Knockout'], starPowers: ['Malaise', 'Injection'], gadgets: ['Shot in the Arm', 'Booster Shots'], hp: 3000, damage: 560, speed: 'Normal', range: 'Very Long' },
  { id: 'frank', name: 'Frank', class: 'tank', rarity: 'epic', tier: 'A', winRate: 58.6, useRate: 6.8, image: img('Frank'), description: 'Hammer-wielding giant with stunning attacks', bestModes: ['Brawl Ball', 'Hot Zone', 'Gem Grab'], starPowers: ['Power Grab', 'Sponge'], gadgets: ['Active Noise Canceling', 'Irresistible Attraction'], hp: 10000, damage: 1680, speed: 'Normal', range: 'Short' },
  { id: 'fang', name: 'Fang', class: 'assassin', rarity: 'chromatic', tier: 'A', winRate: 58.9, useRate: 7.4, image: img('Fang'), description: 'Kung fu master with flying kicks', bestModes: ['Brawl Ball', 'Knockout', 'Showdown'], starPowers: ['Fresh Kicks', 'Divine Soles'], gadgets: ['Corn-Fu', 'Roundhouse Kick'], hp: 5600, damage: 1400, speed: 'Fast', range: 'Normal' },
  { id: 'tara', name: 'Tara', class: 'damage-dealer', rarity: 'mythic', tier: 'A', winRate: 57.3, useRate: 6.8, image: img('Tara'), description: 'Mystic throwing tarot cards with black hole super', bestModes: ['Gem Grab', 'Brawl Ball', 'Hot Zone'], starPowers: ['Black Portal', 'Healing Shade'], gadgets: ['Psychic Enhancer', 'Support from Beyond'], hp: 4200, damage: 560, speed: 'Normal', range: 'Normal' },
  { id: 'max', name: 'Max', class: 'damage-dealer', rarity: 'mythic', tier: 'A', winRate: 58.1, useRate: 7.2, image: img('Max'), description: 'Speedster boosting team velocity', bestModes: ['Brawl Ball', 'Gem Grab', 'Hot Zone'], starPowers: ['Super Charged', 'Run n Gun'], gadgets: ['Phase Shifter', 'Sneaky Sneakers'], hp: 4200, damage: 420, speed: 'Very Fast', range: 'Normal' },
  { id: 'stu', name: 'Stu', class: 'assassin', rarity: 'super-rare', tier: 'A', winRate: 56.9, useRate: 8.1, image: img('Stu'), description: 'Stunt rider dashing with nitro boosts', bestModes: ['Showdown', 'Knockout', 'Brawl Ball'], starPowers: ['Zero Drag', 'Gaso-Heal'], gadgets: ['Speed Zone', 'Breakthrough'], hp: 4200, damage: 756, speed: 'Fast', range: 'Normal' },
  { id: 'colonel-ruffs', name: 'Colonel Ruffs', class: 'support', rarity: 'chromatic', tier: 'A', winRate: 57.8, useRate: 5.4, image: img('Colonel_Ruffs'), description: 'Space commander buffing allies with power-ups', bestModes: ['Knockout', 'Bounty', 'Gem Grab'], starPowers: ['Air Superiority', 'Field Promotion'], gadgets: ['Take Cover', 'Air Support'], hp: 3800, damage: 700, speed: 'Normal', range: 'Long' },
  { id: 'belle', name: 'Belle', class: 'marksman', rarity: 'chromatic', tier: 'A', winRate: 55.8, useRate: 6.2, image: img('Belle'), description: 'Electrifying bounty hunter marking targets', bestModes: ['Bounty', 'Knockout', 'Gem Grab'], starPowers: ['Positive Feedback', 'Grounded'], gadgets: ['Nest Egg', 'Reverse Polarity'], hp: 3200, damage: 1120, speed: 'Normal', range: 'Very Long' },
  { id: 'mandy', name: 'Mandy', class: 'marksman', rarity: 'epic', tier: 'A', winRate: 59.3, useRate: 11.4, image: img('Mandy'), description: 'Candy sniper with charged piercing shots', bestModes: ['Knockout', 'Bounty', 'Showdown'], starPowers: ['In My Sights', 'Hard Candy'], gadgets: ['Caramelize', 'Cookie Crumbs'], hp: 3200, damage: 1400, speed: 'Normal', range: 'Very Long' },

  // B-TIER (Solid Picks)
  { id: 'shelly', name: 'Shelly', class: 'damage-dealer', rarity: 'starting', tier: 'B', winRate: 52.4, useRate: 8.1, image: img('Shelly'), description: 'Starter brawler with powerful shotgun blast', bestModes: ['Showdown', 'Brawl Ball'], starPowers: ['Shell Shock', 'Band-Aid'], gadgets: ['Fast Forward', 'Clay Pigeons'], hp: 5600, damage: 420, speed: 'Normal', range: 'Normal' },
  { id: 'nita', name: 'Nita', class: 'damage-dealer', rarity: 'rare', tier: 'B', winRate: 53.8, useRate: 7.4, image: img('Nita'), description: 'Nature warrior who summons Big Baby Bear', bestModes: ['Heist', 'Brawl Ball', 'Hot Zone'], starPowers: ['Bear With Me', 'Hyper Bear'], gadgets: ['Bear Paws', 'Faux Fur'], hp: 5600, damage: 1120, speed: 'Normal', range: 'Normal' },
  { id: 'bull', name: 'Bull', class: 'tank', rarity: 'rare', tier: 'B', winRate: 53.1, useRate: 5.9, image: img('Bull'), description: 'Charging tank with double-barrel shotgun', bestModes: ['Heist', 'Brawl Ball', 'Showdown'], starPowers: ['Berserker', 'Tough Guy'], gadgets: ['T-Bone Injector', 'Stomper'], hp: 7000, damage: 500, speed: 'Normal', range: 'Short' },
  { id: 'jessie', name: 'Jessie', class: 'damage-dealer', rarity: 'super-rare', tier: 'B', winRate: 52.9, useRate: 6.3, image: img('Jessie'), description: 'Engineer with bouncing orbs and Scrappy turret', bestModes: ['Heist', 'Hot Zone', 'Siege'], starPowers: ['Energize', 'Shocky'], gadgets: ['Spark Plug', 'Recoil Spring'], hp: 4200, damage: 1120, speed: 'Normal', range: 'Long' },
  { id: 'brock', name: 'Brock', class: 'marksman', rarity: 'rare', tier: 'B', winRate: 54.2, useRate: 9.1, image: img('Brock'), description: 'Rocket launcher specialist with explosive shots', bestModes: ['Bounty', 'Knockout', 'Heist'], starPowers: ['Incendiary', 'Rocket No. 4'], gadgets: ['Rocket Laces', 'Rocket Fuel'], hp: 3200, damage: 1540, speed: 'Normal', range: 'Very Long' },
  { id: 'dynamike', name: 'Dynamike', class: 'artillery', rarity: 'super-rare', tier: 'B', winRate: 51.8, useRate: 5.7, image: img('Dynamike'), description: 'Dynamite-throwing miner with bouncing explosives', bestModes: ['Heist', 'Siege', 'Showdown'], starPowers: ['Dyna-Jump', 'Demolition'], gadgets: ['Fidget Spinner', 'Satchel Charge'], hp: 3200, damage: 1120, speed: 'Normal', range: 'Long' },
  { id: 'bo', name: 'Bo', class: 'controller', rarity: 'super-rare', tier: 'B', winRate: 54.6, useRate: 6.1, image: img('Bo'), description: 'Tribal warrior with exploding mines', bestModes: ['Gem Grab', 'Knockout', 'Bounty'], starPowers: ['Circling Eagle', 'Snare a Bear'], gadgets: ['Super Totem', 'Tripwire'], hp: 4800, damage: 728, speed: 'Normal', range: 'Long' },
  { id: 'tick', name: 'Tick', class: 'artillery', rarity: 'super-rare', tier: 'B', winRate: 55.3, useRate: 8.5, image: img('Tick'), description: 'Mine-throwing robot head with seeking super', bestModes: ['Gem Grab', 'Hot Zone', 'Bounty'], starPowers: ['Well Oiled', 'Automa-Tick Reload'], gadgets: ['Mine Mania', 'Last Hurrah'], hp: 2800, damage: 952, speed: 'Normal', range: 'Very Long' },
  { id: 'el-primo', name: 'El Primo', class: 'tank', rarity: 'rare', tier: 'B', winRate: 52.7, useRate: 7.2, image: img('El_Primo'), description: 'Wrestling champion with powerful meteor jump', bestModes: ['Brawl Ball', 'Showdown', 'Gem Grab'], starPowers: ['El Fuego', 'Meteor Rush'], gadgets: ['Suplex Supplement', 'Asteroid Belt'], hp: 8400, damage: 504, speed: 'Fast', range: 'Short' },
  { id: 'barley', name: 'Barley', class: 'artillery', rarity: 'rare', tier: 'B', winRate: 53.4, useRate: 5.4, image: img('Barley'), description: 'Robot bartender throwing damaging bottles', bestModes: ['Hot Zone', 'Heist', 'Siege'], starPowers: ['Medical Use', 'Extra Noxious'], gadgets: ['Sticky Syrup Mixer', 'Herbal Tonic'], hp: 3200, damage: 952, speed: 'Normal', range: 'Long' },
  { id: 'poco', name: 'Poco', class: 'support', rarity: 'rare', tier: 'B', winRate: 54.8, useRate: 6.7, image: img('Poco'), description: 'Musical skeleton healer with wide attacks', bestModes: ['Gem Grab', 'Brawl Ball', 'Hot Zone'], starPowers: ['Da Capo!', 'Screeching Solo'], gadgets: ['Tuning Fork', 'Protective Tunes'], hp: 5600, damage: 980, speed: 'Normal', range: 'Long' },
  { id: 'rosa', name: 'Rosa', class: 'tank', rarity: 'rare', tier: 'B', winRate: 55.1, useRate: 5.3, image: img('Rosa'), description: 'Botanist boxer with damage-reducing shield', bestModes: ['Brawl Ball', 'Hot Zone', 'Showdown'], starPowers: ['Plant Life', 'Thorny Gloves'], gadgets: ['Grow Light', 'Unfriendly Bushes'], hp: 7700, damage: 644, speed: 'Normal', range: 'Short' },
  { id: 'gene', name: 'Gene', class: 'support', rarity: 'mythic', tier: 'B', winRate: 54.2, useRate: 5.6, image: img('Gene'), description: 'Genie pulling enemies close with magic hand', bestModes: ['Gem Grab', 'Brawl Ball', 'Bounty'], starPowers: ['Magic Puffs', 'Spirit Slap'], gadgets: ['Lamp Blowout', 'Vengeful Spirits'], hp: 4800, damage: 1400, speed: 'Normal', range: 'Long' },
  { id: 'sprout', name: 'Sprout', class: 'controller', rarity: 'mythic', tier: 'B', winRate: 54.7, useRate: 4.3, image: img('Sprout'), description: 'Plant robot creating hedges to block paths', bestModes: ['Hot Zone', 'Gem Grab', 'Siege'], starPowers: ['Overgrowth', 'Photosynthesis'], gadgets: ['Garden Mulcher', 'Transplant'], hp: 3800, damage: 1260, speed: 'Normal', range: 'Very Long' },
  { id: 'lola', name: 'Lola', class: 'damage-dealer', rarity: 'chromatic', tier: 'B', winRate: 54.7, useRate: 5.1, image: img('Lola'), description: 'Diva star with ego clone mirror', bestModes: ['Knockout', 'Bounty', 'Gem Grab'], starPowers: ['Improvise', 'Sealed with a Kiss'], gadgets: ['Freeze Frame', 'Stunt Double'], hp: 4200, damage: 560, speed: 'Normal', range: 'Long' },
  { id: 'ash', name: 'Ash', class: 'tank', rarity: 'chromatic', tier: 'B', winRate: 54.3, useRate: 4.8, image: img('Ash'), description: 'Raging garbage knight building fury meter', bestModes: ['Brawl Ball', 'Hot Zone', 'Gem Grab'], starPowers: ['First Bash', 'Mad as Heck'], gadgets: ['Chill Pill', 'Rotten Banana'], hp: 7000, damage: 1260, speed: 'Fast', range: 'Short' },
  { id: 'gus', name: 'Gus', class: 'support', rarity: 'super-rare', tier: 'B', winRate: 53.4, useRate: 4.5, image: img('Gus'), description: 'Ghostly healer with balloon spirit shields', bestModes: ['Gem Grab', 'Bounty', 'Knockout'], starPowers: ['Health Bonanza', 'Spirit Animal'], gadgets: ['Kooky Popper', 'Soul Switcher'], hp: 3800, damage: 1120, speed: 'Normal', range: 'Long' },
  { id: 'sam', name: 'Sam', class: 'tank', rarity: 'chromatic', tier: 'B', winRate: 54.9, useRate: 4.7, image: img('Sam'), description: 'Knuckle-busting brawler with magnetic fist', bestModes: ['Brawl Ball', 'Hot Zone', 'Knockout'], starPowers: ['Hearty Recovery', 'Magnetic Field'], gadgets: ['Pulse Repel', 'Magnetic Dash'], hp: 6000, damage: 1540, speed: 'Normal', range: 'Normal' },

  // C-TIER (Situational Picks)
  { id: 'rico', name: 'Rico', class: 'damage-dealer', rarity: 'super-rare', tier: 'C', winRate: 50.2, useRate: 4.8, image: img('Rico'), description: 'Bouncing bullet specialist in enclosed areas', bestModes: ['Heist', 'Hot Zone', 'Brawl Ball'], starPowers: ['Super Bouncy', 'Robo Retreat'], gadgets: ['Multiball Launcher', 'Bouncy Castle'], hp: 3200, damage: 560, speed: 'Normal', range: 'Long' },
  { id: 'darryl', name: 'Darryl', class: 'tank', rarity: 'super-rare', tier: 'C', winRate: 51.4, useRate: 5.1, image: img('Darryl'), description: 'Rolling robot pirate with auto-charging super', bestModes: ['Heist', 'Brawl Ball', 'Showdown'], starPowers: ['Steel Hoops', 'Rolling Reload'], gadgets: ['Recoiling Rotator', 'Tar Barrel'], hp: 7000, damage: 560, speed: 'Normal', range: 'Short' },
  { id: 'penny', name: 'Penny', class: 'controller', rarity: 'super-rare', tier: 'C', winRate: 49.8, useRate: 4.3, image: img('Penny'), description: 'Pirate with cannon turret and splash attacks', bestModes: ['Heist', 'Siege', 'Hot Zone'], starPowers: ['Last Blast', 'Balls of Fire'], gadgets: ['Pocket Detonator', 'Captain\'s Compass'], hp: 3800, damage: 1260, speed: 'Normal', range: 'Long' },
  { id: 'carl', name: 'Carl', class: 'damage-dealer', rarity: 'super-rare', tier: 'C', winRate: 50.6, useRate: 4.5, image: img('Carl'), description: 'Miner with boomerang pickaxe returns', bestModes: ['Gem Grab', 'Brawl Ball', 'Heist'], starPowers: ['Power Throw', 'Protective Pirouette'], gadgets: ['Heat Ejector', 'Flying Hook'], hp: 5600, damage: 952, speed: 'Normal', range: 'Long' },
  { id: 'bibi', name: 'Bibi', class: 'damage-dealer', rarity: 'epic', tier: 'C', winRate: 51.9, useRate: 5.6, image: img('Bibi'), description: 'Baseball bat wielding speedster with knockback', bestModes: ['Brawl Ball', 'Hot Zone', 'Showdown'], starPowers: ['Home Run', 'Batting Stance'], gadgets: ['Vitamin Booster', 'Extra Sticky'], hp: 5600, damage: 1680, speed: 'Fast', range: 'Short' },
  { id: 'bea', name: 'Bea', class: 'marksman', rarity: 'epic', tier: 'C', winRate: 50.4, useRate: 4.9, image: img('Bea'), description: 'Bee keeper with supercharged follow-up shots', bestModes: ['Bounty', 'Knockout', 'Showdown'], starPowers: ['Insta Beaload', 'Honeycomb'], gadgets: ['Honey Molasses', 'Rattled Hive'], hp: 2800, damage: 1120, speed: 'Normal', range: 'Very Long' },
  { id: 'edgar', name: 'Edgar', class: 'assassin', rarity: 'epic', tier: 'C', winRate: 49.3, useRate: 7.8, image: img('Edgar'), description: 'Emo teen with life-stealing scarf attacks', bestModes: ['Showdown', 'Gem Grab'], starPowers: ['Hard Landing', 'Fisticuffs'], gadgets: ['Let\'s Fly', 'Hardcore'], hp: 3500, damage: 756, speed: 'Very Fast', range: 'Short' },
  { id: 'griff', name: 'Griff', class: 'damage-dealer', rarity: 'epic', tier: 'C', winRate: 51.2, useRate: 4.2, image: img('Griff'), description: 'Greedy shopkeeper throwing coin waves', bestModes: ['Heist', 'Hot Zone', 'Gem Grab'], starPowers: ['Keep the Change', 'Business Resilience'], gadgets: ['Piggy Bank', 'Coin Shower'], hp: 4200, damage: 420, speed: 'Normal', range: 'Long' },
  { id: 'colette', name: 'Colette', class: 'damage-dealer', rarity: 'chromatic', tier: 'C', winRate: 51.5, useRate: 5.2, image: img('Colette'), description: 'Obsessed fan dealing percentage-based damage', bestModes: ['Heist', 'Brawl Ball', 'Hot Zone'], starPowers: ['Push It', 'Mass Tax'], gadgets: ['Na-ah!', 'Gotcha!'], hp: 4200, damage: 1400, speed: 'Normal', range: 'Long' },
  { id: 'lou', name: 'Lou', class: 'controller', rarity: 'chromatic', tier: 'C', winRate: 49.5, useRate: 3.7, image: img('Lou'), description: 'Ice cream vendor freezing enemies solid', bestModes: ['Hot Zone', 'Gem Grab', 'Brawl Ball'], starPowers: ['Supercool', 'Hypothermia'], gadgets: ['Ice Block', 'Cryo Syrup'], hp: 3800, damage: 560, speed: 'Normal', range: 'Long' },
  { id: 'nani', name: 'Nani', class: 'marksman', rarity: 'epic', tier: 'C', winRate: 51.1, useRate: 4.7, image: img('Nani'), description: 'Robot with controllable Peep drone super', bestModes: ['Knockout', 'Bounty', 'Heist'], starPowers: ['Autofocus', 'Tempered Steel'], gadgets: ['Warp Blast', 'Return to Sender'], hp: 2800, damage: 2940, speed: 'Normal', range: 'Long' },
  { id: 'squeak', name: 'Squeak', class: 'controller', rarity: 'mythic', tier: 'C', winRate: 50.4, useRate: 4.3, image: img('Squeak'), description: 'Sticky blob launcher with area denial', bestModes: ['Hot Zone', 'Gem Grab', 'Siege'], starPowers: ['Chain Reaction', 'Super Sticky'], gadgets: ['Windup', 'Residue'], hp: 3800, damage: 1260, speed: 'Normal', range: 'Long' },
  { id: 'mr-p', name: 'Mr. P', class: 'controller', rarity: 'mythic', tier: 'C', winRate: 50.9, useRate: 3.9, image: img('Mr_P'), description: 'Angry penguin hotel manager with porter spawner', bestModes: ['Hot Zone', 'Gem Grab', 'Bounty'], starPowers: ['Handle with Care', 'Revolving Door'], gadgets: ['Service Bell', 'Porter Reinforcements'], hp: 3800, damage: 1036, speed: 'Normal', range: 'Long' },
  { id: 'amber', name: 'Amber', class: 'damage-dealer', rarity: 'legendary', tier: 'C', winRate: 50.1, useRate: 4.6, image: img('Amber'), description: 'Fire-breathing performer with continuous flames', bestModes: ['Heist', 'Hot Zone', 'Brawl Ball'], starPowers: ['Wild Flames', 'Scorchin\' Siphon'], gadgets: ['Fire Starters', 'Dancing Flames'], hp: 3500, damage: 336, speed: 'Normal', range: 'Normal' },
  { id: 'pam', name: 'Pam', class: 'support', rarity: 'epic', tier: 'C', winRate: 52.3, useRate: 4.1, image: img('Pam'), description: 'Healing turret mama with scrap gun', bestModes: ['Hot Zone', 'Gem Grab', 'Siege'], starPowers: ['Mama\'s Hug', 'Mama\'s Squeeze'], gadgets: ['Pulse Modulator', 'Scrapsucker'], hp: 5600, damage: 364, speed: 'Normal', range: 'Long' },

  // D-TIER (Weak in Meta)
  { id: 'crow', name: 'Crow', class: 'assassin', rarity: 'legendary', tier: 'D', winRate: 47.8, useRate: 6.4, image: img('Crow'), description: 'Poison dagger throwing toxic assassin', bestModes: ['Showdown', 'Gem Grab'], starPowers: ['Extra Toxic', 'Carrion Crow'], gadgets: ['Defense Booster', 'Slowing Toxin'], hp: 3200, damage: 504, speed: 'Very Fast', range: 'Long' },
  { id: 'leon', name: 'Leon', class: 'assassin', rarity: 'legendary', tier: 'D', winRate: 48.2, useRate: 7.1, image: img('Leon'), description: 'Invisibility master with spinner blades', bestModes: ['Showdown', 'Gem Grab', 'Bounty'], starPowers: ['Smoke Trails', 'Invisiheal'], gadgets: ['Clone Projector', 'Lollipop Drop'], hp: 3200, damage: 644, speed: 'Very Fast', range: 'Normal' },
  { id: 'sandy', name: 'Sandy', class: 'controller', rarity: 'legendary', tier: 'D', winRate: 48.9, useRate: 4.7, image: img('Sandy'), description: 'Sleepy sand controller with team invisibility', bestModes: ['Gem Grab', 'Brawl Ball', 'Hot Zone'], starPowers: ['Rude Sands', 'Healing Winds'], gadgets: ['Sleep Stimulator', 'Sweet Dreams'], hp: 4800, damage: 1260, speed: 'Normal', range: 'Long' },
  { id: 'meg', name: 'Meg', class: 'damage-dealer', rarity: 'legendary', tier: 'D', winRate: 46.5, useRate: 3.8, image: img('Meg'), description: 'Mech pilot transforming into powerful robot', bestModes: ['Heist', 'Siege', 'Showdown'], starPowers: ['Force Field', 'Self Destruction'], gadgets: ['Jolting Volts', 'Toolbox'], hp: 2800, damage: 560, speed: 'Fast', range: 'Normal' },
  { id: 'jacky', name: 'Jacky', class: 'tank', rarity: 'super-rare', tier: 'D', winRate: 47.3, useRate: 3.2, image: img('Jacky'), description: 'Construction worker with ground-shaking drill', bestModes: ['Brawl Ball', 'Hot Zone'], starPowers: ['Counter Crush', 'Hardy Hard Hat'], gadgets: ['Pneumatic Booster', 'Rebuild'], hp: 7000, damage: 1680, speed: 'Normal', range: 'Short' },
  { id: 'gale', name: 'Gale', class: 'controller', rarity: 'chromatic', tier: 'D', winRate: 48.1, useRate: 3.5, image: img('Gale'), description: 'Snowstorm blower pushing enemies away', bestModes: ['Brawl Ball', 'Hot Zone', 'Gem Grab'], starPowers: ['Blustery Blow', 'Freezing Snow'], gadgets: ['Spring Ejector', 'Twister'], hp: 4800, damage: 420, speed: 'Normal', range: 'Long' },
  { id: 'surge', name: 'Surge', class: 'damage-dealer', rarity: 'chromatic', tier: 'D', winRate: 47.9, useRate: 4.1, image: img('Surge'), description: 'Juice bot upgrading through the match', bestModes: ['Showdown', 'Gem Grab', 'Knockout'], starPowers: ['To the Max!', 'Serve Ice Cold'], gadgets: ['Power Surge', 'Power Shield'], hp: 4200, damage: 1680, speed: 'Normal', range: 'Normal' },
  { id: '8-bit', name: '8-Bit', class: 'damage-dealer', rarity: 'super-rare', tier: 'D', winRate: 48.5, useRate: 3.9, image: img('8-Bit'), description: 'Retro arcade hero with damage boost turret', bestModes: ['Heist', 'Hot Zone', 'Showdown'], starPowers: ['Boosted Booster', 'Plugged In'], gadgets: ['Cheat Cartridge', 'Extra Credits'], hp: 5600, damage: 512, speed: 'Very Slow', range: 'Long' },
];

// Game Modes Data
export const GAME_MODES = [
  { id: 'gem-grab', name: 'Gem Grab', icon: '💎', description: 'Collect 10 gems and hold them for 15 seconds to win', type: '3v3', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Gem_Grab.png', tips: ['Control mid area', 'Dont be greedy with gems', 'Support your gem carrier'] },
  { id: 'brawl-ball', name: 'Brawl Ball', icon: '⚽', description: 'Score 2 goals before the enemy team to win', type: '3v3', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Brawl_Ball.png', tips: ['Pass the ball to dodge', 'Use super to destroy walls', 'Defend your goal'] },
  { id: 'showdown', name: 'Showdown', icon: '💀', description: 'Battle royale - last brawler standing wins', type: 'Solo/Duo', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Showdown.png', tips: ['Collect power cubes', 'Bush camp strategically', 'Third party fights'] },
  { id: 'knockout', name: 'Knockout', icon: '🎯', description: 'Eliminate the enemy team - no respawns each round', type: '3v3', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Knockout.png', tips: ['Trade efficiently', 'Stay alive is priority', 'Focus isolated enemies'] },
  { id: 'bounty', name: 'Bounty', icon: '⭐', description: 'Collect stars by eliminating enemies, most stars wins', type: '3v3', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Bounty.png', tips: ['Protect high-star teammates', 'Dont feed kills', 'Long range is king'] },
  { id: 'heist', name: 'Heist', icon: '🔒', description: 'Destroy the enemy safe while protecting yours', type: '3v3', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Heist.png', tips: ['High DPS brawlers shine', 'Balance attack and defense', 'Use walls wisely'] },
  { id: 'hot-zone', name: 'Hot Zone', icon: '🔥', description: 'Control zones to earn points, first to 100% wins', type: '3v3', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Hot_Zone.png', tips: ['Zone control is everything', 'Tanks and healers excel', 'Dont overcommit'] },
  { id: 'ranked', name: 'Ranked', icon: '🏆', description: 'Competitive mode with pick/ban and seasonal rewards', type: 'Competitive', image: 'https://pixelcrux.com/Brawl_Stars/Images/Game_Modes/Power_League.png', tips: ['Master 15+ brawlers', 'Counter-pick strategically', 'Communicate with team'] },
];

// Events Data
export const EVENTS = [
  { id: 'brawl-pass', name: 'Brawl Pass', icon: '🎫', description: 'Season pass with exclusive rewards and new brawler' },
  { id: 'club-league', name: 'Club League', icon: '🏅', description: 'Weekly competitive club battles for club coins' },
  { id: 'challenges', name: 'Challenges', icon: '🏁', description: 'Special limited-time events with unique rewards' },
  { id: 'championship', name: 'Championship', icon: '🏆', description: 'Monthly qualifiers for esports competitions' },
];

// Helper functions
export function getBrawlersByTier(tier) {
  return BRAWLERS.filter(b => b.tier === tier);
}

export function getBrawlersByClass(classId) {
  return BRAWLERS.filter(b => b.class === classId);
}

export function getBrawlerById(id) {
  return BRAWLERS.find(b => b.id === id);
}

export function getTopBrawlers(limit = 10) {
  return [...BRAWLERS].sort((a, b) => b.winRate - a.winRate).slice(0, limit);
}

export function getBrawlersByMode(modeId) {
  return BRAWLERS.filter(b => b.bestModes.some(m => m.toLowerCase().replace(/\s+/g, '-') === modeId));
}

export function getBrawlersByRarity(rarity) {
  return BRAWLERS.filter(b => b.rarity === rarity);
}

export function getGameModeById(id) {
  return GAME_MODES.find(m => m.id === id);
}

export function searchBrawlers(query) {
  const lowerQuery = query.toLowerCase();
  return BRAWLERS.filter(b =>
    b.name.toLowerCase().includes(lowerQuery) ||
    b.class.toLowerCase().includes(lowerQuery) ||
    b.description.toLowerCase().includes(lowerQuery)
  );
}
