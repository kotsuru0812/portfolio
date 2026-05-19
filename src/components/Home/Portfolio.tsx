"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, type Portfolio } from "@/components/Portfolio";
import ProjectTypeBadges from "@/components/ProjectTypeBadges";
import {
  filterByProjectType,
  groupByCompany,
  type PortfolioViewMode,
} from "@/lib/portfolioViews";

const VIEW_OPTIONS: { mode: PortfolioViewMode; label: string }[] = [
  { mode: "all", label: "All" },
  { mode: "new", label: "新規立上げ" },
  { mode: "improvement", label: "改善" },
  { mode: "renewal", label: "リニューアル" },
];

function PortfolioCard({
  portfolio,
  priority,
}: {
  portfolio: Portfolio;
  priority?: boolean;
}) {
  return (
    <div className="grid gap-1">
      <Link href={`/portfolio/${portfolio.id}`}>
        <h3 className="text-lg mb-1">{portfolio.title}</h3>
        <ProjectTypeBadges types={portfolio.projectTypes} />
        <Image
          alt={portfolio.title}
          className="object-cover"
          height={400}
          src={portfolio.image}
          priority={priority}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width={400}
        />
      </Link>
    </div>
  );
}

function PortfolioCompanyGroups({
  groups,
}: {
  groups: { company: string; items: Portfolio[] }[];
}) {
  if (groups.length === 0) {
    return (
      <p className="text-center text-slate-600 dark:text-slate-400">
        該当する作品はありません
      </p>
    );
  }

  return (
    <div className="mx-auto space-y-12 sm:max-w-4xl lg:max-w-5xl">
      {groups.map((group, groupIndex) => (
        <div key={group.company}>
          <h3 className="text-2xl font-bold mb-6">{group.company}</h3>
          <div className="grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {group.items.map((portfolio, index) => (
              <PortfolioCard
                key={portfolio.id}
                portfolio={portfolio}
                priority={groupIndex === 0 && index < 3}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [mode, setMode] = useState<PortfolioViewMode>("all");

  const displayItems = useMemo(() => {
    if (mode === "all") {
      return portfolioItems;
    }
    return filterByProjectType(portfolioItems, mode);
  }, [mode]);

  const companyGroups = useMemo(
    () => groupByCompany(displayItems),
    [displayItems]
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Portfolio</h2>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="radiogroup"
          aria-label="ポートフォリオの表示"
        >
          {VIEW_OPTIONS.map(({ mode: optionMode, label }) => {
            const isSelected = mode === optionMode;
            return (
              <button
                key={optionMode}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setMode(optionMode)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isSelected
                    ? "border-gray-900 bg-gray-900 text-white dark:border-slate-200 dark:bg-slate-200 dark:text-slate-900"
                    : "border-gray-300 bg-transparent text-slate-700 hover:border-gray-500 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-400"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div aria-live="polite">
          <PortfolioCompanyGroups groups={companyGroups} />
        </div>
      </div>
    </section>
  );
}
