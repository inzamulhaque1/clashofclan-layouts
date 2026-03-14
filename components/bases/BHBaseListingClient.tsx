"use client";

import { useState, useMemo } from "react";
import BHBaseCard from "./BHBaseCard";
import type { BuilderBaseLayout, BHBaseType } from "@/lib/bases";
import { BH_BASE_TYPES } from "@/lib/bases";

type SortOption = "newest" | "views" | "rating";
const BASES_PER_PAGE = 9;

export default function BHBaseListingClient({
  bases,
}: {
  bases: BuilderBaseLayout[];
}) {
  const [activeType, setActiveType] = useState<BHBaseType | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let result = activeType === "all" ? bases : bases.filter((b) => b.type === activeType);

    switch (sortBy) {
      case "views":
        result = [...result].sort((a, b) => b.views - a.views);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        result = [...result].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    return result;
  }, [bases, activeType, sortBy]);

  const handleTypeChange = (type: BHBaseType | "all") => {
    setActiveType(type);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filtered.length / BASES_PER_PAGE);
  const startIdx = (currentPage - 1) * BASES_PER_PAGE;
  const paginatedBases = filtered.slice(startIdx, startIdx + BASES_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <div>
      {/* Filter & Sort row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        {/* Type filter */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => handleTypeChange("all")}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full border whitespace-nowrap transition-colors ${
              activeType === "all"
                ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                : "text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            All Types
          </button>
          {BH_BASE_TYPES.map((bt) => (
            <button
              key={bt.type}
              onClick={() => handleTypeChange(bt.type)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full border whitespace-nowrap transition-colors ${
                activeType === bt.type
                  ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                  : "text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {bt.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Sort:</span>
          {(
            [
              { value: "newest", label: "Newest" },
              { value: "views", label: "Views" },
              { value: "rating", label: "Rating" },
            ] as { value: SortOption; label: string }[]
          ).map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSortChange(opt.value)}
              className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold rounded-lg transition-colors ${
                sortBy === opt.value
                  ? "bg-[#1a1a2e] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <p className="text-[10px] sm:text-xs text-gray-400">
          {filtered.length} {filtered.length === 1 ? "base" : "bases"} found
          {totalPages > 1 && (
            <span className="ml-1">
              — page {currentPage} of {totalPages}
            </span>
          )}
        </p>
      </div>

      {/* Grid */}
      {paginatedBases.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {paginatedBases.map((base) => (
            <BHBaseCard key={base.id} base={base} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-16">
          <p className="text-gray-400 text-xs sm:text-sm">No bases found for this filter.</p>
          <button
            onClick={() => handleTypeChange("all")}
            className="mt-3 text-primary text-xs sm:text-sm font-semibold hover:underline"
          >
            Show all bases
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-6 sm:mt-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs sm:text-sm font-semibold transition-colors ${
              currentPage === 1
                ? "border-gray-100 text-gray-300 cursor-not-allowed"
                : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
            }`}
            aria-label="Previous page"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span key={`dots-${idx}`} className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-xs text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-[11px] sm:text-xs font-bold transition-colors ${
                  currentPage === page
                    ? "bg-primary text-white border-primary"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {page}
              </button>
            )
          )}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg border text-xs sm:text-sm font-semibold transition-colors ${
              currentPage === totalPages
                ? "border-gray-100 text-gray-300 cursor-not-allowed"
                : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
            }`}
            aria-label="Next page"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
