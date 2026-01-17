import { Suspense } from 'react';
import { generatePageMeta } from '@/lib/seo';
import SearchPageContent from './SearchPageContent';

export const metadata = generatePageMeta({
  title: 'Search Clash of Clans Base Layouts - Find War, Farm, Trophy Bases',
  description: 'Search 4500+ Clash of Clans base layouts. Find the perfect war base, farming base, or trophy base for TH3-TH18 and BH3-BH10. Filter by type and level with one-click copy links!',
  path: '/search',
});

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchPageContent />
    </Suspense>
  );
}

function SearchLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Search <span className="text-primary">Base Layouts</span>
        </h1>
      </div>
      <div className="flex justify-center py-16">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
