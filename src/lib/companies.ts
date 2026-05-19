export const COMPANY_ORDER = [
  "Cookpad",
  "Cookpad TV",
  "LBOSE",
  "POS+",
] as const;

export type CompanyName = (typeof COMPANY_ORDER)[number];
