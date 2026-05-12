"use client";

import { useState } from "react";
import { type Code, formatRelativeTime } from "@/lib/codes";

interface CodeRowProps {
  code: Code;
  accentColor: string;
  redeemUrl?: string;
}

export default function CodeRow({ code, accentColor, redeemUrl }: CodeRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const age = formatRelativeTime(code.firstSeen);
  const canRedeemExternally = redeemUrl?.startsWith("http");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 px-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <code
            className="font-mono font-bold text-base tracking-wide break-all"
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
        <p className="text-[11px] text-gray-400 mt-1">Added {age}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {canRedeemExternally && (
          <a
            href={redeemUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-xs font-semibold rounded-full border border-gray-200 text-light hover:bg-gray-50 inline-flex items-center gap-1"
          >
            Redeem
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        <button
          onClick={handleCopy}
          className="px-4 py-2 text-xs font-semibold rounded-full transition-all"
          style={{
            backgroundColor: copied ? "#10B981" : accentColor,
            color: "white",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
