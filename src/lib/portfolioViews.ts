import type { Portfolio, ProjectType } from "@/components/Portfolio";
import { COMPANY_ORDER, type CompanyName } from "@/lib/companies";

export type PortfolioViewMode = "all" | ProjectType;

function comparePortfolios(a: Portfolio, b: Portfolio): number {
  if (b.year !== a.year) {
    return b.year - a.year;
  }
  return a.sortOrder - b.sortOrder;
}

export function filterByProjectType(
  items: Portfolio[],
  type: ProjectType
): Portfolio[] {
  return items
    .filter((item) => item.projectTypes.includes(type))
    .sort(comparePortfolios);
}

export function groupByCompany(
  items: Portfolio[]
): { company: CompanyName; items: Portfolio[] }[] {
  const withCompany = items.filter(
    (item): item is Portfolio & { company: CompanyName } =>
      item.company !== null
  );

  return COMPANY_ORDER.map((company) => ({
    company,
    items: withCompany
      .filter((item) => item.company === company)
      .sort(comparePortfolios),
  })).filter((group) => group.items.length > 0);
}
