import {
  PROJECT_TYPE_LABELS,
  PROJECT_TYPE_ORDER,
  type ProjectType,
} from "@/components/Portfolio";
import { cn } from "@/lib/utils";

const BADGE_CLASS =
  "inline-block rounded px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100";

type ProjectTypeBadgesProps = {
  types: ProjectType[];
  className?: string;
};

export default function ProjectTypeBadges({
  types,
  className,
}: ProjectTypeBadgesProps) {
  const sortedTypes = PROJECT_TYPE_ORDER.filter((type) => types.includes(type));

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-1.5 mb-2 list-none p-0",
        className
      )}
    >
      {sortedTypes.map((type) => (
        <li key={type}>
          <span className={BADGE_CLASS}>{PROJECT_TYPE_LABELS[type]}</span>
        </li>
      ))}
    </ul>
  );
}
