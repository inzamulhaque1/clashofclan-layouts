import LookupClient from './LookupClient';

export const metadata = {
  title: 'Player & Clan Lookup - Find Any CoC Profile | CoC Bases',
  description: 'Search for any Clash of Clans player or clan. View detailed stats, troops, heroes, achievements, war history, and more from the official CoC API.',
  keywords: [
    'clash of clans player search',
    'coc player lookup',
    'coc clan finder',
    'clash of clans stats',
    'coc profile search',
    'find coc player',
    'search clan clash of clans',
  ],
  openGraph: {
    title: 'Player & Clan Lookup - Clash of Clans',
    description: 'Find any player or clan stats in Clash of Clans',
    type: 'website',
  },
};

export default function LookupPage() {
  return (
    <div className="min-h-screen py-8">
      <LookupClient />
    </div>
  );
}
