"use client";

import { useState } from "react";
import type { Code } from "@/lib/codes";

interface CodeRowProps {
  code: Code;
  accentColor: string;
}

export default function CodeRow({ code, accentColor }: CodeRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-4 py-4 px-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <code
            className="font-mono font-bold text-base tracking-wide"
            style={{ color: accentColor }}
          >
            {code.code}
          </code>
          {code.verified && (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
              <svg
                className="w-2.5 h-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          )}
        </div>
        <p className="text-sm text-muted leading-tight">{code.reward}</p>
      </div>
      <button
        onClick={handleCopy}
        className="shrink-0 px-4 py-2 text-xs font-semibold rounded-full transition-all"
        style={{
          backgroundColor: copied ? "#10B981" : accentColor,
          color: "white",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
