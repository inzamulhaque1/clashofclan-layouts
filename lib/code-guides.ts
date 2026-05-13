import type { GameId } from "./constants";

export interface CodeGuide {
  overview: string[];
  howCodesWork: string[];
  pitfalls: { title: string; body: string }[];
  freshnessNote: string;
}

export const codeGuides: Record<GameId, CodeGuide> = {
  "genshin-impact": {
    overview: [
      "Genshin Impact redemption codes are one of the most reliable free-to-play sources of Primogems, the in-game currency used to roll for new characters and weapons. HoYoverse releases them in concentrated bursts tied to the game's six-week version cycle: the bulk drop during a special program livestream a few days before each major patch (5.x), with smaller event codes scattered through the rest of the version.",
      "Most active codes deliver between 60 and 300 Primogems, plus secondary materials like Mora, Hero's Wit, Mystic Enhancement Ore, and food items. Three codes are effectively permanent — GENSHINGIFT being the most famous — and refresh their redemption window periodically, which makes them safe to keep bookmarked.",
      "Two redemption methods exist: an in-game menu (Paimon → Settings → Account → Redeem Now), and a web page at the official gift center. The web flow is faster if you have multiple codes to enter, since it has no cooldown between submissions.",
    ],
    howCodesWork: [
      "Code drops cluster around the version livestream that airs roughly five days before each major update. HoYoverse traditionally releases three livestream codes during the broadcast itself, each worth 100 Primogems plus crafting materials. These codes have the shortest lifespan — usually 24 to 48 hours — so they are the highest-priority codes on this page.",
      "Outside the livestream window, codes still trickle out via the official Genshin Impact Twitter (X) account, HoYoLab community posts, partnership events, and milestone celebrations (subscriber counts, sales targets, anniversary). Those generally last several days to several weeks.",
    ],
    pitfalls: [
      {
        title: "Account must be Adventure Rank 10",
        body: "Redemption is locked until your account reaches AR 10. New accounts cannot claim any code, even permanent ones. Push through the early quests first.",
      },
      {
        title: "Server region matters",
        body: "Codes are usually global but some event codes are region-specific (America, Europe, Asia, TW/HK/MO). The web redemption page asks you to select a server before entering the code — picking the wrong one returns 'invalid code'.",
      },
      {
        title: "Each code claimable once per account",
        body: "Even permanent codes can only be redeemed a single time per account. If you've claimed GENSHINGIFT before, it won't grant rewards again.",
      },
      {
        title: "Rewards arrive via in-game mail, not instantly",
        body: "After submitting a code you'll see a success message, but the actual Primogems and items show up in your in-game mailbox. Mail expires in 30 days, so don't forget to claim it.",
      },
    ],
    freshnessNote:
      "Livestream codes (3-letter prefixes followed by numbers) expire fastest — redeem within 24 hours. Permanent codes like GENSHINGIFT are safe to claim any time.",
  },

  "honkai-star-rail": {
    overview: [
      "Honkai: Star Rail's redemption codes are the main free-to-play path to Stellar Jade, the premium currency you use to pull on character and Light Cone banners. HoYoverse — the same studio behind Genshin Impact — runs a near-identical code economy here: livestream codes tied to version updates, plus a steady drip of milestone and event codes between patches.",
      "Active codes typically grant 50 to 300 Stellar Jade, with bonus Credits, Traveler's Guides (XP material), Condensed Aether (relic mats), and themed food items. The permanent code STARRAILGIFT is the HSR equivalent of GENSHINGIFT — bookmark-friendly, refreshes every few months.",
      "Redemption happens at hsr.hoyoverse.com/gift on the web, or in-game via the Phone menu → Account → Redemption Code. The web flow is faster for batches.",
    ],
    howCodesWork: [
      "The HoYoverse 'special program' livestream airs about five days before each major version patch (currently on a 6-week cycle). Three livestream codes are revealed during the broadcast, each worth 60-100 Stellar Jade. They expire within roughly 24 hours, so checking this page right after each livestream is the highest-value habit.",
      "Between livestreams, codes ship via the official @honkaistarrail X account, HoYoLab community events, and themed promotions (e.g. character birthdays, plot-arc resolutions). These have multi-day to multi-week redemption windows.",
    ],
    pitfalls: [
      {
        title: "Trailblaze Level 10 required",
        body: "Codes are locked until your account clears the Belobog prologue and hits Trailblaze Level 10. Cannot redeem anything before that.",
      },
      {
        title: "Wrong server returns 'invalid'",
        body: "The web redemption form asks for server region. Mismatched server is the most common reason codes look broken — recheck whether you're on America, Europe, Asia, or TW/HK/MO.",
      },
      {
        title: "Stellar Jade vs Oneiric Shard confusion",
        body: "Codes only grant Stellar Jade (the F2P currency). Oneiric Shard, the paid currency, can never be redeemed via code. If a 'leaked code' promises Oneiric Shards, it's fake.",
      },
      {
        title: "Mail expires in 30 days",
        body: "Rewards arrive in your in-game mailbox after redemption. Unclaimed mail is deleted after 30 days, so make sure to log in and claim.",
      },
    ],
    freshnessNote:
      "Livestream codes (typically with prefixes like HSR, STAR, or the version number) are the most time-sensitive — assume a 24-hour window. STARRAILGIFT and similar permanent codes are the safest backup.",
  },

  "wuthering-waves": {
    overview: [
      "Wuthering Waves, Kuro Games' post-apocalyptic open-world ARPG, has a sparser code economy than its HoYoverse competitors. Active codes are rare — often only one or two at any given moment — but each one tends to deliver a high payout: Astrites (the gacha currency), Shell Credits, premium resonance potions, and revival inhalers.",
      "The flagship permanent-ish code is WUTHERINGGIFT, which has been refreshed multiple times since launch. New codes drop almost exclusively around version updates and special collaborations.",
      "Redemption is at wutheringwaves.kurogames.com/en/main/gift on the web, or in-game via Settings → Other → Redeem Code. Most players use the in-game flow because the web form requires linking your account first.",
    ],
    howCodesWork: [
      "Kuro Games releases version-anniversary codes during each major patch livestream, plus occasional collab event codes (e.g. crossover months). Cadence is slower than HoYoverse games — expect 1-3 new codes per six-week cycle.",
      "Official sources: the @Wuthering_Waves X account, the Kuro Games official Discord milestone announcements, and Twitch livestream giveaways during patch reveals.",
    ],
    pitfalls: [
      {
        title: "Union Level 22 minimum",
        body: "Redemption is locked until your Rover reaches Union Level 22. New accounts must progress through the early storyline first.",
      },
      {
        title: "Case-sensitive — preserve casing exactly",
        body: "WuWa codes mix uppercase and lowercase letters more than other games. WUTHERINGGIFT works, wutheringgift does not.",
      },
      {
        title: "Web redemption requires account linking",
        body: "If you haven't linked your in-game UID to a Kuro account, web redemption will fail silently. In-game redemption avoids this entirely.",
      },
      {
        title: "Codes can be region-locked",
        body: "Some collaboration codes are tied to specific server regions. The error message is generic, so if a code 'doesn't work' for you but others confirm it works, region mismatch is the likely cause.",
      },
    ],
    freshnessNote:
      "WuWa typically has 1-2 active codes at a time. Don't be surprised if this page looks sparse — that's normal for the game, not a scraper problem.",
  },

  "zenless-zone-zero": {
    overview: [
      "Zenless Zone Zero, HoYoverse's stylish urban-fantasy action RPG, runs the same code economy as Genshin Impact and Honkai: Star Rail: tightly-timed livestream codes around version updates, with looser community codes between. The premium currency is Polychrome (used for Signal Search pulls), and you can also earn Dennies, W-Engine modules, and Investigator Logs from codes.",
      "ZENLESSGIFT serves as the permanent baseline code, similar to GENSHINGIFT and STARRAILGIFT. It refreshes periodically and is safe to bookmark.",
      "Redemption is at zenless.hoyoverse.com/redemption on the web, or in-game via the menu → More → Redemption Code. Both work the same; web is faster for stacks.",
    ],
    howCodesWork: [
      "ZZZ follows the HoYoverse 6-week version cycle. Three livestream codes drop during each special program (roughly 4-5 days before the patch goes live), each worth 60 Polychrome plus secondary mats. These expire within 24 hours.",
      "Between livestreams, codes come from the official @ZZZ_EN X account, HoYoLab event posts, and themed milestones. These typically last 3-14 days.",
    ],
    pitfalls: [
      {
        title: "Inter-Knot Level 8 required",
        body: "Code redemption unlocks at Inter-Knot Level 8 — roughly 30 minutes of opening play. Anything lower returns an error.",
      },
      {
        title: "Codes can use mixed case",
        body: "ZZZ uses codes like 'zzzCuteness' alongside all-uppercase ones. The redemption form is case-sensitive — copy-paste rather than type when possible.",
      },
      {
        title: "Server region must match account",
        body: "Web redemption asks for America, Europe, Asia, or TW/HK/MO server. Pick the wrong one and the system rejects the code with no explanation.",
      },
      {
        title: "Mail expires in 30 days",
        body: "Rewards land in the in-game mail. Unclaimed mail is purged after 30 days, so redeem and claim in the same session.",
      },
    ],
    freshnessNote:
      "Version codes from the livestream (prefixed ZZZ + version + theme word, e.g. ZZZ28HERO) have the tightest expiry. Treat them as 24-hour codes.",
  },

  "free-fire": {
    overview: [
      "Garena Free Fire has one of the most aggressive code release cadences in mobile gaming — and also the shortest expiry windows. Active codes typically last 12 to 48 hours, sometimes only a few hours for region-specific drops. Rewards include Diamonds (paid currency), weapon crates, character vouchers, gun skins, and emotes.",
      "Codes follow a strict 12-character uppercase alphanumeric format (e.g. FFRSX4CYHLLQ). Anything that doesn't match that shape is almost certainly fake.",
      "Redemption is web-only at reward.ff.garena.com. There is no in-game redemption menu. You log in with the same Facebook / Google / VK / Twitter / Apple ID account you use for the game.",
    ],
    howCodesWork: [
      "Garena releases codes through multiple channels: the official @FreeFireBR (Brazil) and regional X accounts, in-game livestreams on YouTube, partnerships with content creators, and event-triggered drops tied to tournaments (Free Fire World Series) and game updates.",
      "Most codes are region-locked. A code that works in India/Bangladesh server may fail for Brazil server and vice versa. The redemption page does not always tell you why a code failed — silent rejection is common.",
    ],
    pitfalls: [
      {
        title: "Guest accounts cannot redeem",
        body: "If you signed up as a guest, redemption will fail. You must bind your account to Facebook, Google, or another supported login first.",
      },
      {
        title: "Rewards take up to 24 hours",
        body: "Unlike most games, Free Fire reward delivery is not instant. After a successful redeem, the items can take up to 24 hours to appear in the in-game vault.",
      },
      {
        title: "Region-locked codes look broken",
        body: "If a code 'doesn't work' for you but works for someone else, the most common reason is region mismatch. The Indian, Brazilian, Indonesian, and global servers each get distinct code drops.",
      },
      {
        title: "Codes typically expire within 24 hours",
        body: "By the time you read about a Free Fire code, it may already be dead. We scrape every 2 hours, but for FF specifically, freshness is brutal — redeem the moment you see one.",
      },
    ],
    freshnessNote:
      "Free Fire codes have the shortest lifespan of any game on this site. If a code is more than 48 hours old it is almost certainly expired, even if a different aggregator still lists it as active.",
  },

  "mobile-legends": {
    overview: [
      "Mobile Legends: Bang Bang (MLBB), Moonton's flagship MOBA, has a steadier but less generous code economy than the gacha games on this site. Codes typically grant Diamonds (premium currency), hero fragments, skin pieces, and occasional emotes or border frames.",
      "MLBB codes are unusually short — typically 6-12 characters of mixed case alphanumerics (e.g. 2y3vo2r3x, HOLAMLBB). Many have a redemption cap (first N players to redeem get the reward), so even unexpired codes can fail with a 'limit reached' message.",
      "Redemption is web-only at m.mobilelegends.com/en/redemption. There is no in-game redemption menu. You need your MLBB User ID and Server ID, plus a verification code sent to your in-game mailbox.",
    ],
    howCodesWork: [
      "Moonton drops codes through the official @MobileLegendsOL X account, the in-game news feed, livestreamed events, and partnership campaigns (esports, brand collabs). The Mobile Legends Professional League (MPL) tournaments are particularly heavy on code drops.",
      "Some codes are exclusive to new players (HOLAMLBB is the recurring example) — they only work on freshly created accounts.",
    ],
    pitfalls: [
      {
        title: "User ID + Server ID required, not username",
        body: "Find both in-game by tapping your avatar → Profile. The User ID is the long number, the Server ID is in parentheses next to it. Both are needed.",
      },
      {
        title: "Verification code from in-game mail",
        body: "The redemption page asks for a verification code first. Click 'Send', open your MLBB inbox in-game, and copy the code from the mail. This step trips up newcomers.",
      },
      {
        title: "Redemption caps cause silent failures",
        body: "Many codes have a fixed redemption limit (e.g. 'first 1000 players'). Once hit, the code still appears in lists but returns 'redemption failed'. There's no way to tell upfront whether a code is still under its cap.",
      },
      {
        title: "Some codes are new-player only",
        body: "If a code is labeled 'new players only', it will fail on accounts with significant playtime. HOLAMLBB is the recurring example.",
      },
    ],
    freshnessNote:
      "MLBB codes can technically be valid for weeks but hit their redemption cap within hours. Try every active code on this page — failures usually mean 'cap reached', not 'expired'.",
  },

  "pubg-mobile": {
    overview: [
      "PUBG Mobile's code economy is uneven. Krafton and Tencent (the regional publishers) release codes irregularly, often tied to esports events (PUBG Mobile Global Championship, PMSL), partnership campaigns, and YouTuber giveaways. Active codes deliver Unknown Cash (UC, the premium currency), gun skins, outfit pieces, Elite Royale Pass vouchers, and crate keys.",
      "PUBG codes are typically 10-19 uppercase alphanumeric characters (e.g. PUBGGAMECODECITY, BBKVZBZ6FW). Many follow a verbose 'word + region marker + suffix' pattern.",
      "Redemption is web-only at midasbuy.com (Krafton's official payment partner), under the redeem section for PUBG Mobile. You need your in-game Character ID, which you can find in Profile.",
    ],
    howCodesWork: [
      "PUBG Mobile drops codes most heavily around major version updates (every 4-6 weeks), esports tournament weekends, and partnership campaigns. The official @PUBGMOBILE X account, in-app news, and Midasbuy promotions are the canonical sources.",
      "Many 'codes' floating around online are actually expired but still listed on aggregator sites that don't auto-cleanup. Our scraper cross-checks the active vs expired sections and tries to keep the active list realistic — but PUBG Mobile is the hardest game to keep clean.",
    ],
    pitfalls: [
      {
        title: "Character ID, not in-game name",
        body: "Find your numeric Character ID in-game under Profile (tap your avatar). Don't enter your display name — that's not the same thing.",
      },
      {
        title: "Region-locked codes are common",
        body: "PUBG Mobile servers (Asia, Europe, North America, South America, etc.) have distinct code drops. A code that works for India server may fail for Europe and vice versa.",
      },
      {
        title: "Captcha + region selection mandatory",
        body: "Midasbuy's redemption flow requires solving a captcha and picking your region every time. Mobile-only browsers sometimes break the captcha — try a desktop browser if you're stuck.",
      },
      {
        title: "Many 'active' codes on the internet are expired",
        body: "PUBG Mobile aggregator sites are notoriously slow to mark dead codes. If a code fails with 'invalid', it has likely expired even if it's still listed elsewhere.",
      },
    ],
    freshnessNote:
      "Trust verified (✓✓) PUBG codes more than unverified ones. The PUBG Mobile signal-to-noise ratio across the open web is the worst of all games on this site.",
  },

  "roblox-blox-fruits": {
    overview: [
      "Blox Fruits, the One Piece-inspired Roblox hit by Gamer Robot, has the largest pool of active codes on this site — typically 20-30 working codes at any given time. Most reward 15-30 minute 2x EXP boosts (priceless for grinding levels), with a smaller set granting stat resets, Beli (in-game currency), or cosmetic titles.",
      "Codes are case-sensitive and frequently contain underscores or mixed case (e.g. SUB2GAMERROBOT_EXP1, kittgaming, Sub2OfficialNoobie). Copy-paste is strongly recommended over typing.",
      "Redemption is in-game only. Launch Blox Fruits, click the Settings cog on the left side of the screen, scroll to find the Code box, paste the code exactly, and click Redeem.",
    ],
    howCodesWork: [
      "Gamer Robot releases codes for nearly every milestone: subscriber targets on the official YouTube channel, major patch releases (typically every 2-3 months), special events (Easter, Halloween, anniversary), and partnerships with Roblox content creators.",
      "Many active codes are 'creator codes' (SUB2_____) that the developers leave permanently active to reward popular content creators. These persist for months or years — they're the safest codes on the list.",
    ],
    pitfalls: [
      {
        title: "Case-sensitive — preserve exactly",
        body: "Sub2OfficialNoobie works. SUB2OFFICIALNOOBIE does not. Always copy-paste, never type.",
      },
      {
        title: "Stat resets are one-use per code",
        body: "Codes like KITT_RESET grant a single stat refund. You can redeem each reset code once per character. They don't stack.",
      },
      {
        title: "EXP boosts stack additively, not multiplicatively",
        body: "Redeeming two 2x EXP codes back-to-back doesn't give you 4x EXP — it gives you 2x EXP for the combined duration. Save unused codes for when you start a big grind session.",
      },
      {
        title: "Codes work across all servers and updates",
        body: "Unlike many Roblox games, Blox Fruits codes are not server-specific. If a code fails, it's expired — not region-locked.",
      },
    ],
    freshnessNote:
      "Most Blox Fruits codes have multi-month lifespans. The 'NEW' codes from the latest update are the riskiest to leave unredeemed, since they sometimes expire within a few weeks of release.",
  },

  "afk-journey": {
    overview: [
      "AFK Journey, the successor to AFK Arena by Lilith Games, has one of the most generous code economies in the idle RPG space. Codes typically deliver Diamonds (premium currency), Invite Letters (gacha currency for character summons), Gold, and Origami Hamsters (event currency).",
      "Code format is loose: 6-15 characters of mixed-case alphanumerics (e.g. LILITH13TH, AFKJCOMMUNITY, QhqsNkDpTX). Some are mnemonic (AFKJ10, AFKJ8888), others are random strings.",
      "Redemption is web-based at afkjourney.farlightgames.com/en/redeem, or in-game via your avatar → Settings → Account → Redemption Code. Both methods work; web is faster if you have multiple codes.",
    ],
    howCodesWork: [
      "Lilith Games drops codes around major milestones: anniversaries, patch releases (~4-6 weeks), subscriber milestones, and themed events. The official @AFKJourney X account and the AFK Journey Discord milestone announcements are the canonical sources.",
      "New codes tend to drop in bursts (5-10 at once during an anniversary or major update) and then nothing for several weeks. The pattern is more discrete than the steady-trickle approach of HoYoverse games.",
    ],
    pitfalls: [
      {
        title: "Diamonds vs Invitation Letters",
        body: "Diamonds buy general items in-game. Invitation Letters (also called Summon Letters) are the gacha currency for pulling characters. Codes deliver both, and they're not interchangeable.",
      },
      {
        title: "Origami Hamsters are event-only currency",
        body: "Some codes grant Origami Hamsters, which are usable only during their corresponding event. After the event ends, unspent Hamsters expire — burn them before the deadline.",
      },
      {
        title: "Account binding required for web redemption",
        body: "If your account is unbound (guest mode), web redemption fails. Bind to Apple, Google, Facebook, or a Farlight account first.",
      },
      {
        title: "Rewards via mail, claim within 30 days",
        body: "All redemption rewards arrive in the in-game mailbox. Unclaimed mail is deleted after 30 days, so make sure to log in and claim.",
      },
    ],
    freshnessNote:
      "AFK Journey codes have long average lifespans — most active codes work for several weeks. Anniversary codes (LILITH13TH-style) are the most generous and worth prioritizing.",
  },
};
