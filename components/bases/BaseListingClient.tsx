"use client";

import { useState, useMemo } from "react";
import BaseCard from "./BaseCard";
import BaseTypeFilter from "./BaseTypeFilter";
import type { BaseLayout, BaseType } from "@/lib/bases";

type SortOption = "newest" | "views" | "rating";

export default function BaseListingClient({
  bases,
}: {
  bases: BaseLayout[];
}) {
  const [activeType, setActiveType] = useState<BaseType | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

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

  return (
    <div>
      {/* Filter & Sort row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <BaseTypeFilter activeType={activeType} onTypeChange={setActiveType} />

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-gray-400 font-medium">Sort:</span>
          {(
            [
              { value: "newest", label: "Newest" },
              { value: "views", label: "Most Viewed" },
              { value: "rating", label: "Top Rated" },
            ] as { value: SortOption; label: string }[]
          ).map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSortBy(opt.value)}
              className={`px-3 py-1 text-[11px] font-semibold rounded-lg transition-colors ${
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
      <p className="text-xs text-gray-400 mb-4">
        {filtered.length} {filtered.length === 1 ? "base" : "bases"} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((base) => (
            <BaseCard key={base.id} base={base} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">No bases found for this filter.</p>
          <button
            onClick={() => setActiveType("all")}
            className="mt-3 text-primary text-sm font-semibold hover:underline"
          >
            Show all bases
          </button>
        </div>
      )}
    </div>
  );
}
