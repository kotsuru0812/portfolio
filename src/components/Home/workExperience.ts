import type { CompanyName } from "@/lib/companies";

export const workExperienceByCompany: {
  company: CompanyName;
  items: string[];
}[] = [
  {
    company: "Cookpad",
    items: [
      "2012-2014 | レシピストア/プロのレシピ",
      "2015-2016 | ユーザーファースト推進室",
      "2016-2017 | 技術部/UXデザイングループ",
    ],
  },
  {
    company: "Cookpad TV",
    items: [
      "2017-2018 | cookpad studio",
      "2017-2018 | cookpadTV App",
      "2018-2020 | storeTV",
      "2020-2023 | cookpadLive App",
    ],
  },
  {
    company: "LBOSE",
    items: [
      "2023-2023 | Agu.スタイリスト App",
      "2023-2024 | 東京大学薬学部 CIRCLe LIFF App",
    ],
  },
];
