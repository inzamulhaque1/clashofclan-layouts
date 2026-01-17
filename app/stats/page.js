import StatsClient from './StatsClient';

export const metadata = {
  title: 'Clash of Clans Leagues & Stats - All League Information | CoC Bases',
  description: 'Complete guide to all Clash of Clans leagues including Trophy leagues, Builder Base leagues, War leagues (CWL), and Capital leagues. See trophy requirements and rewards.',
  keywords: [
    'clash of clans leagues',
    'coc trophy leagues',
    'cwl war leagues',
    'builder base leagues',
    'clan capital leagues',
    'legend league',
    'champion league',
    'titan league',
    'master league',
  ],
  openGraph: {
    title: 'Clash of Clans Leagues & Stats',
    description: 'Complete guide to all leagues in Clash of Clans',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function StatsPage() {
  return (
    <div className="min-h-screen py-8">
      <StatsClient />
    </div>
  );
}
