"use client";

import { BASE_TYPES } from "@/lib/bases";
import type { BaseType } from "@/lib/bases";

export default function BaseTypeFilter({
  activeType,
  onTypeChange,
}: {
  activeType: BaseType | "all";
  onTypeChange: (type: BaseType | "all") => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onTypeChange("all")}
        className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
          activeType === "all"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        All Bases
      </button>
      {BASE_TYPES.map((bt) => (
        <button
          key={bt.type}
          onClick={() => onTypeChange(bt.type)}
          className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-colors ${
            activeType === bt.type
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {bt.label}
        </button>
      ))}
    </div>
  );
}
