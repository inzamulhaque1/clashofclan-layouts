import CodeRow from "./CodeRow";
import type { Code, ExpiredCode } from "@/lib/codes";

interface CodeTableProps {
  active: Code[];
  expired: ExpiredCode[];
  accentColor: string;
  redeemUrl?: string;
}

export default function CodeTable({
  active,
  expired,
  accentColor,
  redeemUrl,
}: CodeTableProps) {
  return (
    <div className="space-y-8">
      {/* Active Codes */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#10B981" }}
          />
          <h2 className="text-lg font-extrabold text-light">
            Active Codes ({active.length})
          </h2>
        </div>

        {active.length === 0 ? (
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-8 text-center">
            <p className="text-muted text-sm">
              No active codes right now. Check back soon — we update this page
              every few hours.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {active.map((code) => (
              <CodeRow
                key={code.code}
                code={code}
                accentColor={accentColor}
                redeemUrl={redeemUrl}
              />
            ))}
          </div>
        )}
      </div>

      {/* Expired Codes (collapsible) */}
      {expired.length > 0 && (
        <details className="group">
          <summary className="flex items-center gap-2 mb-4 cursor-pointer list-none">
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <h2 className="text-lg font-extrabold text-light">
              Expired Codes ({expired.length})
            </h2>
            <svg
              className="w-4 h-4 text-muted transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span className="text-xs text-muted ml-auto">
              Click to expand history
            </span>
          </summary>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl divide-y divide-gray-200">
            {expired.map((code) => (
              <div
                key={code.code}
                className="flex items-center justify-between px-5 py-3 gap-4"
              >
                <code className="font-mono text-sm text-gray-500 line-through break-all">
                  {code.code}
                </code>
                <span className="text-xs text-gray-400 shrink-0">
                  Expired {code.expiredOn}
                </span>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
