export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedDate: string;
  updatedDate: string;
  readMinutes: number;
  sections: GuideSection[];
  related: string[];
}

export const guideArticles: GuideArticle[] = [
  {
    slug: "how-redemption-codes-work",
    title: "How Game Redemption Codes Work (And Why Publishers Use Them)",
    description:
      "What redemption codes actually do under the hood, why publishers like HoYoverse and Garena keep dropping them, and how to think about them strategically as a free-to-play player.",
    excerpt:
      "Codes are not just marketing freebies. They're a precise lever publishers use to shape player behavior — here's the mechanics.",
    publishedDate: "2026-05-13",
    updatedDate: "2026-05-13",
    readMinutes: 6,
    sections: [
      {
        heading: "What a redemption code actually is",
        paragraphs: [
          "A redemption code is a short string — usually 6 to 20 characters — that maps to a specific bundle of in-game rewards on the publisher's servers. When you submit the code, the server checks whether your account is eligible (region, level, prior redemptions) and, if so, queues the rewards for delivery to your in-game mailbox.",
          "The code itself is not the reward. The code is a key that unlocks a row in a database. That row says: 'give 60 Primogems and 5 Adventurer's Experience to whoever submits the key STARRAILGIFT, but only once per account, only before November 1st, and only for accounts on America and Europe servers.' Every redemption code follows the same shape, even if the publisher names and reward types differ.",
          "This is why a code can stop working overnight: the publisher flips a flag on that row. The code itself is still typeable, but the database now rejects it. There's no 'expiration' encoded in the string — only in the rule attached to it.",
        ],
      },
      {
        heading: "Why publishers issue codes in the first place",
        paragraphs: [
          "Codes are not charity. They serve four concrete jobs for the publisher:",
          "First, they pull players into livestreams. The vast majority of high-value codes drop during pre-version 'special programs.' Players who skip the broadcast miss the codes. This converts passive followers into active viewers, which the publisher can monetize via ad partnerships and metrics for investors.",
          "Second, they re-engage lapsed players. A code drop on the official Twitter account gets thousands of shares, which lands in the feeds of people who have not opened the game in weeks. A free 60 Primogems is enough to make many of them log in again, and the publisher knows that a player who logs in even once is dramatically more likely to spend.",
          "Third, they reward community participation. Codes tied to subscriber milestones, anniversaries, or Discord events make community members feel directly responsible for the rewards. This builds the kind of grassroots loyalty that paid marketing cannot buy.",
          "Fourth, they're a cheap apology. When a server crashes or a patch breaks something, a 100-Primogem code defuses player anger faster than a refund mechanism. The publisher controls the supply, so the marginal cost of issuing more is roughly zero.",
        ],
      },
      {
        heading: "How to think about codes as a player",
        paragraphs: [
          "Treat codes as a free baseline, not a strategy. The total annual yield from codes for a HoYoverse game is roughly 10,000-15,000 of the premium currency — enough for about 60 pulls. That's significant but not transformative. Plan your saving and spending around event rewards and battle passes; treat codes as the unexpected bonus.",
          "Prioritize livestream codes ruthlessly. They are the rarest (only released during the broadcast), the highest-value per code, and the fastest-expiring. Set a calendar reminder for each game's special program — that's where 70%+ of a year's code rewards come from.",
          "Don't trust codes from random YouTube videos, TikTok comments, or sketchy aggregator sites that ask you to 'verify' before showing the code. Those are scams. Real codes are always short, always free to view, and always come from the canonical sources: the official Twitter/X account, the publisher's livestream, or a verified aggregator that itself sources from the official channels.",
        ],
      },
    ],
    related: ["why-codes-expire", "code-troubleshooting", "are-codes-safe"],
  },

  {
    slug: "why-codes-expire",
    title: "Why Do Game Codes Expire So Fast?",
    description:
      "Some codes last 12 hours, others last years. The expiry rules are deliberate — here's the logic behind the timer and how to react to it.",
    excerpt:
      "Code expiry is not arbitrary. The window is tuned to specific behaviors the publisher wants from you, and knowing why helps you not miss codes.",
    publishedDate: "2026-05-13",
    updatedDate: "2026-05-13",
    readMinutes: 5,
    sections: [
      {
        heading: "Three buckets of code expiry",
        paragraphs: [
          "Almost every code on the live-service market falls into one of three expiry categories, and the bucket determines how urgently you should redeem.",
          "Permanent or near-permanent codes. GENSHINGIFT, STARRAILGIFT, ZENLESSGIFT, and similar baseline codes are intentionally always-on. The publisher refreshes their redemption window every few months without changing the string. These codes exist as a long-tail acquisition tool: a new player searches for codes, finds the permanent one, claims rewards, and gets a positive first impression. There's no urgency to redeem these — they'll be there tomorrow.",
          "Event codes. Tied to a specific window: an anniversary, a season, a collab month, a milestone celebration. Typical lifespan is 3-14 days. The publisher wants players to engage with the event itself, so the code dies when the event ends. Worth redeeming the day you see them but no need to panic.",
          "Livestream and reactive codes. These are the fast ones. 12-48 hours typically. They're either announced live (livestream codes) or pushed out in response to a server issue, a viral tournament moment, or a partnership deal. The publisher is trying to maximize concentration: capturing all the value at once. If you see a livestream code, redeem it within the hour.",
        ],
      },
      {
        heading: "Why short windows exist at all",
        paragraphs: [
          "Short expiry seems anti-player on its face — why not let everyone claim every code forever? Three reasons:",
          "Cost control. Each redemption is a permanent transfer of currency into the player's account. The publisher wants those transfers to land mostly with engaged players (who will spend more) rather than dormant accounts that will redeem and never play again. Short windows filter for engagement.",
          "Scarcity signaling. A code that expires in 24 hours feels valuable. A code that lasts forever feels like a banner ad. The marketing team understands this — the perception of scarcity is itself part of the reward.",
          "Anti-bot pressure. Permanent codes get scraped by automated farming operations: bots create thousands of accounts, redeem the code on each, and sell the accounts. Short expiry breaks the economics of the bot operation.",
        ],
      },
      {
        heading: "Free Fire is an outlier",
        paragraphs: [
          "Garena Free Fire deserves a separate paragraph. Its codes routinely expire in 12 hours, occasionally faster. The format is also unusually rigid (12-char uppercase alphanumeric).",
          "This is partly because the Free Fire player base skews toward emerging markets where mobile data is precious. The publisher wants players to open the game daily to check for codes — short windows guarantee daily check-ins. It's also partly because Free Fire's reward economy is more volatile than gacha games: weapon skins, character vouchers, and event currencies need to land in active players' inventories during specific events.",
          "Practical advice: if you play Free Fire, install our codes page as a homescreen bookmark and check it as part of your daily login routine. By the time a Free Fire code shows up on a slow-updating aggregator, it's almost certainly dead.",
        ],
      },
    ],
    related: ["how-redemption-codes-work", "code-troubleshooting", "find-codes-faster"],
  },

  {
    slug: "are-codes-safe",
    title: "Are Game Redemption Codes Safe to Use?",
    description:
      "Real redemption codes are safe. The scams around them are not. Here's how to tell the difference and protect your account.",
    excerpt:
      "Codes themselves are harmless strings. The infrastructure around them — fake sites, bait-and-switch, account 'verifiers' — is where players get burned.",
    publishedDate: "2026-05-13",
    updatedDate: "2026-05-13",
    readMinutes: 5,
    sections: [
      {
        heading: "The code itself is just text",
        paragraphs: [
          "A redemption code cannot harm your account directly. It is a short string of letters and numbers that you paste into an official redemption form. The form belongs to the publisher. The form checks the string against the publisher's database. Either rewards arrive in your in-game mail, or the form returns 'invalid code.' That's the entire surface area.",
          "There is no plausible mechanism by which typing a code into the official redemption page could leak your password, steal your characters, or get your account banned. The redemption flow is the same flow the publisher uses internally to grant rewards through customer support.",
          "What can hurt your account: the websites, videos, and Discord bots that wrap themselves around the codes ecosystem.",
        ],
      },
      {
        heading: "The actual scams to watch for",
        paragraphs: [
          "Fake redemption pages. Scammers buy domain names that look similar to the official redemption URL and run a copy of the legitimate page. You enter your login credentials — they harvest them. The fix: always type or paste the official URL directly. For Genshin Impact that's genshin.hoyoverse.com/en/gift, not 'genshinredeem.com' or any variant. Never click a redemption link from a Twitter DM or YouTube comment.",
          "'Generators' and 'unused codes.' Any website claiming to generate free codes via a tool is a scam. Codes are not algorithmically generated — they're pulled from a database. There is no shortcut. These sites either harvest credentials, install malware, or simply collect your traffic to sell to ad networks.",
          "'Verify your account first.' Real redemption never requires you to download an app, install a browser extension, complete a 'survey,' or share the page on social media. If a code source asks for any of those before showing the code, it's a scam.",
          "Stream sniping and YouTube spam. Comments on legitimate Genshin Impact videos often contain fake codes designed to look real. The codes are wrong on purpose — the goal is to bait clicks to the scammer's channel or website. Stick to canonical sources.",
        ],
      },
      {
        heading: "How to verify a code source is legitimate",
        paragraphs: [
          "Two-step test: Can you trace the code to the publisher's official channel? Is the redemption form URL the canonical one?",
          "Canonical channels for each publisher are listed on their game's page on this site — the official Twitter handle, official Discord, and official redemption URL come from the publisher's own footer or contact page. Anything that originated outside those channels and isn't being cross-confirmed by them is suspect.",
          "Our scraper only pulls from a vetted set of aggregator pages whose codes match what shows up on the publisher's own channels. If we ever publish a code that turns out to be malicious or fake, it would be a bug — please email us. So far the cross-source verification rule has blocked every junk code from entering our active list.",
        ],
      },
    ],
    related: ["how-redemption-codes-work", "code-troubleshooting", "find-codes-faster"],
  },

  {
    slug: "hoyoverse-codes-roundup",
    title: "HoYoverse Codes Roundup: Genshin, Star Rail & Zenless Zone Zero",
    description:
      "All three HoYoverse live-service games run the same code economy with subtle differences. Here's how to maximize free pulls across all three.",
    excerpt:
      "If you play more than one HoYoverse game, your code routine should be a single 5-minute habit every six weeks. Here's the playbook.",
    publishedDate: "2026-05-13",
    updatedDate: "2026-05-13",
    readMinutes: 6,
    sections: [
      {
        heading: "Why HoYoverse codes deserve their own playbook",
        paragraphs: [
          "Genshin Impact, Honkai: Star Rail, and Zenless Zone Zero are made by the same studio and share a near-identical code economy: six-week version cycles, a 'special program' livestream four to five days before each major patch, three livestream codes per game per cycle, and a steady drip of milestone codes in between. If you play even two of the three games, treating them as one routine is dramatically more efficient than chasing each game separately.",
          "The currencies are different (Primogems / Stellar Jade / Polychrome), but the redemption flow, the validity windows, and the channel mix are essentially the same. Once you know the rhythm for one, you know it for all three.",
        ],
      },
      {
        heading: "The six-week routine",
        paragraphs: [
          "Subscribe to the official YouTube channels for the games you play (Genshin Impact, Honkai: Star Rail, Zenless Zone Zero) and turn on notifications for livestream announcements only. The special program for each game is announced 4-7 days in advance.",
          "On livestream day, plan to be at a screen for the 30-45 minute broadcast or watch the recording within 12 hours. The three codes are revealed during the broadcast and again in a follow-up tweet from the game's official X account. They expire 24-48 hours after release.",
          "Between livestreams, the @GenshinImpact, @honkaistarrail, and @ZZZ_EN accounts post smaller event and milestone codes. These have 3-14 day windows. Bookmark this site and check once a week — that catches almost everything.",
        ],
      },
      {
        heading: "Cross-game tips that save real time",
        paragraphs: [
          "Use the web redemption pages (genshin.hoyoverse.com/en/gift, hsr.hoyoverse.com/gift, zenless.hoyoverse.com/redemption) rather than in-game flows when you have multiple codes. Web has no per-code cooldown; in-game makes you close menus between submissions.",
          "All three games use the same HoYoLab account ecosystem. If you logged into HoYoLab through any of them, you can redeem codes for all of them without re-authenticating per game — just switch the game tab on the web redemption page.",
          "Permanent baseline codes (GENSHINGIFT, STARRAILGIFT, ZENLESSGIFT) work as a litmus test for whether redemption is functioning. If those fail on a specific account, the problem is with the account state (wrong server selected, account banned, AR/TL too low), not with the code.",
          "Mail expires 30 days after a code is redeemed. Claim within the same login session whenever possible — the most common reason players say 'my code didn't work' is that the rewards arrived in mail and got purged before being collected.",
        ],
      },
    ],
    related: ["how-redemption-codes-work", "find-codes-faster", "code-troubleshooting"],
  },

  {
    slug: "find-codes-faster",
    title: "How to Find Game Codes Faster: Official Sources Cheat Sheet",
    description:
      "Skip the aggregators. The official channels for each game release codes minutes after creation — here's where to watch.",
    excerpt:
      "Aggregator sites are slow. The fastest path to a fresh code is the publisher's own channels — and there are usually 2-3 that matter per game.",
    publishedDate: "2026-05-13",
    updatedDate: "2026-05-13",
    readMinutes: 5,
    sections: [
      {
        heading: "The four-channel pattern",
        paragraphs: [
          "Every major live-service game uses some combination of the same four channels to release codes. Knowing which channels matter for which game gets you codes hours or days before they reach aggregator sites.",
          "Channel 1: Official Twitter/X account. The cheapest, fastest distribution. Almost every publisher uses this. Notification on for the canonical handle of each game you play. This catches the majority of medium-priority codes.",
          "Channel 2: Official YouTube channel. Where livestream codes get announced. Subscribe and turn on notifications for major broadcasts only (don't drown in shorts and gameplay clips).",
          "Channel 3: Official Discord. Hit-or-miss by game — HoYoverse uses Discord lightly, while Kuro Games for Wuthering Waves and Lilith for AFK Journey treat it as primary. Worth joining for the games you actively play.",
          "Channel 4: In-game news / launcher. Easy to miss but consistent. Most launchers and main-menu news tabs flag the existence of new codes within hours of release. Worth checking on login for the games you play daily.",
        ],
      },
      {
        heading: "The canonical handles per game",
        paragraphs: [
          "Genshin Impact: @GenshinImpact (X), genshin.hoyoverse.com (redemption), HoYoLab (community).",
          "Honkai: Star Rail: @honkaistarrail (X), hsr.hoyoverse.com (redemption), HoYoLab (community).",
          "Zenless Zone Zero: @ZZZ_EN (X), zenless.hoyoverse.com (redemption), HoYoLab (community).",
          "Wuthering Waves: @Wuthering_Waves (X), Kuro Games Discord (primary code source), wutheringwaves.kurogames.com (redemption).",
          "Garena Free Fire: regional X accounts (@FreeFireBR for Brazil, @ffmcofficial for India, etc. — pick yours), reward.ff.garena.com (redemption).",
          "Mobile Legends: Bang Bang: @MobileLegendsOL (X), in-game news feed, m.mobilelegends.com (redemption).",
          "PUBG Mobile: @PUBGMOBILE (X), Midasbuy promotions, midasbuy.com (redemption).",
          "Blox Fruits (Roblox): @BloxFruits (X), official YouTube channel (creator codes), in-game settings menu (redemption).",
          "AFK Journey: @AFKJourney (X), official Discord milestone announcements, afkjourney.farlightgames.com (redemption).",
        ],
      },
      {
        heading: "Why this site exists if the channels are public",
        paragraphs: [
          "Fair question. Three reasons we add value over watching the channels directly:",
          "First, deduplication. A single Genshin Impact code might appear on Twitter, HoYoLab, the in-game news, and a livestream simultaneously. We surface it once with a clear active/expired marker.",
          "Second, cross-source verification. Codes that appear on the official channel of one game but get picked up by 2+ independent aggregators are marked verified. Single-source codes go on the page too, but flagged so you know to redeem fast.",
          "Third, the historical record. Expired codes have long-tail SEO value (people search 'is GENSHINGIFT still working?' and similar). We keep an expired-codes accordion on every page so the data isn't lost when codes die.",
        ],
      },
    ],
    related: ["hoyoverse-codes-roundup", "code-troubleshooting", "how-redemption-codes-work"],
  },

  {
    slug: "code-troubleshooting",
    title: "Redemption Code Troubleshooting: Why Your Code Might Not Work",
    description:
      "Ten failure modes for game redemption codes and how to diagnose each one in under a minute.",
    excerpt:
      "If a code 'doesn't work' the cause is almost always one of ten things. Diagnose in a minute instead of giving up.",
    publishedDate: "2026-05-13",
    updatedDate: "2026-05-13",
    readMinutes: 5,
    sections: [
      {
        heading: "The ten common failure modes",
        paragraphs: [
          "When a code returns 'invalid code,' 'redemption failed,' or just silently does nothing, work down this checklist. Most failures resolve within the first three checks.",
          "1. Typo or case mismatch. Even a single character wrong returns invalid. Copy-paste rather than type. Beware of trailing spaces from sloppy copy.",
          "2. Wrong server region. The redemption form asks for America / Europe / Asia / TW-HK-MO. Picking the wrong one for your account silently rejects the code, often with the same 'invalid' message you'd get for a typo. Double-check your in-game profile for the correct server.",
          "3. Already redeemed. Each code is one-shot per account. If you've claimed it before, the second attempt returns the same generic error.",
          "4. Account level too low. Most games gate redemption behind a level threshold (AR 10 for Genshin, Trailblaze Level 10 for HSR, Inter-Knot Level 8 for ZZZ, Union Level 22 for WuWa). New accounts cannot redeem anything until they clear the gate.",
          "5. Code expired. The code is correctly spelled and your account is eligible, but the publisher has marked the code inactive in their database. Check the expired section on our codes page for confirmation.",
          "6. Region-locked. Some codes are exclusive to a specific server region (common in Free Fire and Mobile Legends). The error message is generic, but if confirmed-working codes work for others on different servers, region is the likely cause.",
          "7. Redemption cap hit. Some codes have a fixed number of redemptions allowed (common in Mobile Legends and PUBG Mobile partnership codes). The code is technically still active but the slots are gone. Try the next code in the list.",
          "8. New-player only. Some codes only work on accounts created in the last X days. HOLAMLBB is the most famous example. If you have an old account, the code will fail.",
          "9. Guest / unbound account. If your account has not been linked to a Google / Apple / Facebook / publisher account, web redemption fails for many games. Bind first.",
          "10. Wrong redemption page. There are dozens of look-alike domains. Always start from the canonical URL listed on this site, never from a search result or DM.",
        ],
      },
      {
        heading: "When it really is broken",
        paragraphs: [
          "If you've worked through all ten checks and the code still fails, the most likely explanation is that the publisher pulled the code without telling anyone publicly. This happens occasionally for partnership codes that turn out to have been miscommunicated.",
          "You can file a support ticket with the publisher, but realistically these go nowhere. The pragmatic move is to move on to the next active code on the list.",
          "If the same code fails for multiple people on different accounts at roughly the same time, our scraper will catch it within two hours and move the code to expired. That auto-cleanup is the closest thing to a 'is this code actually dead' indicator that any aggregator can offer.",
        ],
      },
    ],
    related: ["how-redemption-codes-work", "are-codes-safe", "find-codes-faster"],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | null {
  return guideArticles.find((g) => g.slug === slug) ?? null;
}

export function getAllGuideSlugs(): string[] {
  return guideArticles.map((g) => g.slug);
}
