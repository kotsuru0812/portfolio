import type { CompanyName } from "@/lib/companies";

export type ProjectType = "new" | "improvement" | "renewal";

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  new: "新規立上げ",
  improvement: "改善",
  renewal: "リニューアル",
};

export const PROJECT_TYPE_ORDER: ProjectType[] = [
  "new",
  "improvement",
  "renewal",
];

export type Portfolio = {
  id: string;
  title: string;
  year: number;
  company: CompanyName | null;
  projectTypes: ProjectType[];
  sortOrder: number;
  award?: string;
  charge: string;
  concept?: string;
  ingenuity: string;
  image: string;
  imageSize: { width: number; height: number };
};

export const portfolioItems: Portfolio[] = [
  {
    id: "crm-dashboard",
    title: "CRM - ダッシュボード",
    year: 2024,
    company: "POS+",
    projectTypes: ["improvement"],
    sortOrder: 1,
    charge:
      "新規機能追加に伴い、UI/UXデザインを担当しました。同時にアンケート回答画面（モバイル）のUI改善も行いました。",
    ingenuity:
      "当初、クライアントの課題や分析の目的が曖昧だったため、初稿で3案を提出し、クライアントへのヒアリングを提案させていただきました。その結果、NPSの指標が重要と判明し、項目と適切なグラフを追加することができました。",
    image: "/portfolio/CRM-dashboard.png",
    imageSize: { width: 800, height: 600 },
  },
  {
    id: "mobile-order",
    title: "モバイルオーダー",
    year: 2024,
    company: "POS+",
    projectTypes: ["improvement"],
    sortOrder: 2,
    charge:
      "新規機能追加や機能改善に伴い、UI/UXデザインを担当しました。展示用のプロトタイプの制作も担当しました。",
    ingenuity:
      "実際の動きに近いプロトタイプを作ることで、エンジニアとの連携をスムーズに行うことができました。また、実機の使用感をプロトタイプで再現することで、展示や営業用として、幅広く活用していただけると好評を得ております。",
    image: "/portfolio/mobileorder-01.png",
    imageSize: { width: 800, height: 600 },
  },
  {
    id: "onboarding",
    title: "オンボーディング効率化",
    year: 2025,
    company: "POS+",
    projectTypes: ["renewal"],
    sortOrder: 3,
    charge: "UI/UXデザインを担当しました。",
    ingenuity:
      "ユーザーにとって、登録フローの複雑さが離脱の原因となっていたため、フローを簡素化し、各ステップの要件を再整理しました。必要最低限の内容に絞ることで、直感的に入力することができ、CSチームや営業チームからも好評を得ております。",
    image: "/portfolio/onbording-01.png",
    imageSize: { width: 800, height: 600 },
  },
  {
    id: "circle-life",
    title: "CIRCLe LIFFアプリ",
    year: 2024,
    company: "LBOSE",
    projectTypes: ["new"],
    sortOrder: 1,
    charge:
      "LINE上で動く、ウェブアプリのUIデザインを担当しました。",
    ingenuity:
      "子供の特定疾患ということで、両親が操作すること、遺伝性の疾患であるため、兄弟姉妹がいる場合は複数の患者の情報を登録できる必要がありました。そのため、患者ごとにテーマカラーを登録できるようにし、アプリ自体は白ベースのシンプルなものにしました。",
    image: "/portfolio/circle-life.png",
    imageSize: { width: 666, height: 692 },
  },
  {
    id: "agu",
    title: "Agu. スタイリストアプリ",
    year: 2023,
    company: "LBOSE",
    projectTypes: ["renewal"],
    sortOrder: 1,
    charge:
      "既存アプリのリニューアルにともない、Android/iOS アプリのUX/UIデザインを担当しています。",
    ingenuity:
      "ブランドカラーのダークグレーを軸にし、ファーストビューに全ての機能の導線を配置しました。報酬のグラフを配置することで、一目で今の売上状況が確認できるようにしています。",
    image: "/portfolio/agu.png",
    imageSize: { width: 666, height: 630 },
  },
  {
    id: "cookpad-kitchen-star",
    title: "cookpad キッチンスター",
    year: 2016,
    company: "Cookpad",
    projectTypes: ["new"],
    sortOrder: 1,
    charge: "サイト全体のUIデザインを担当しました。",
    concept:
      "「SNSで ”魅せる”料理を仕事にする」\nSNSを通じて料理を魅力的に表現することで、新たな仕事のチャンスを掴める人を増やしたい。",
    ingenuity:
      "写真や人物に目がいきやすいように、白ベースで色を少なくしました。キーカラーも落ち着いた色を選定しております。",
    image: "/portfolio/cookpad-kitchen-star.png",
    imageSize: { width: 480, height: 908 },
  },
  {
    id: "cookpad-studio",
    title: "cookpad studio アプリ",
    year: 2019,
    company: "Cookpad TV",
    projectTypes: ["new"],
    sortOrder: 2,
    charge:
      "使用するカメラの選定からアプリのUX/UIデザインを担当しました。アプリストアで配布しているアプリではなく、インハウスアプリとなります。",
    concept:
      "「誰でも簡単に料理動画が撮影できるアプリ」\n一般のユーザーが気軽に料理動画を撮影できる場所と機材を提供し、プロ並みの料理動画が作れてしまうアプリにすることがコンセプトとなっています。",
    ingenuity:
      "見た目は徹底的にシンプルにし、動画編集などの機能は必要最低限に絞ることにより、迷いのない操作性とプロ並みの動画編集を実現することができました。",
    image: "/portfolio/cookpad-studio.png",
    imageSize: { width: 641, height: 643 },
  },
  {
    id: "cookpad-tv",
    title: "cookpadTV アプリ",
    year: 2018,
    company: "Cookpad TV",
    projectTypes: ["new"],
    sortOrder: 1,
    award: "Google Play Best of 2018 生活お役立ち部門 大賞受賞",
    charge: "Android/iOS アプリのUX/UIデザインを担当しています。",
    concept:
      "「一緒に料理が作れるライブ」\nプロの料理家などがライブ配信することで、離れた場所でも一緒に料理を作り、料理を学ぶことができるアプリをコンセプトにしています。",
    ingenuity:
      "クッキングLIVEらしく料理が映えるデザインを意識しました。Android、iOSそれぞれのデザインガイドラインに沿ったデザインにしています。",
    image: "/portfolio/cookpad-tv.png",
    imageSize: { width: 790, height: 550 },
  },
  {
    id: "cookpad-storetv",
    title: "storeTV-流通向けサイネージ",
    year: 2018,
    company: "Cookpad TV",
    projectTypes: ["new", "improvement"],
    sortOrder: 2,
    charge:
      "流通向けサイネージ端末のUX/UIデザイン、端末選定、開発ディレクションを担当しました。展示会などのクリエイティブや大型サイネージの枠デザインも担当しました。",
    ingenuity:
      "流通の売場スタッフが簡単に操作できるように、自動化できる機能はすべて自動化しました。既存プロダクトを引き継いだので、課題から改善点を提案し、スムーズに運用ができるようにし、MDMを自前で開発することで、大幅なコスト削減を実現しました。",
    image: "/portfolio/cookpad-storetv.png",
    imageSize: { width: 700, height: 621 },
  },
  {
    id: "cookpad-id",
    title: "cookpad ユーザー基盤刷新",
    year: 2017,
    company: "Cookpad",
    projectTypes: ["renewal"],
    sortOrder: 1,
    charge:
      "クックパッドのユーザー基盤のUX/UIデザインを担当しました。リリーススピードをあげるために、Sassを用いてマークアップまでを行いました。",
    concept:
      "「シンプルでスマートなユーザー基盤」\nSMS認証を導入することにより、ユーザーの生活環境にそったユーザー基盤を構築し、ブラウザを閉じることなくユーザー登録が完了するスマートな設計にしました。",
    ingenuity:
      "ユーザー登録に関するUIは複雑で分かりにくいものになっていたため、必要最低限の情報だけに絞り、画面自体をシンプルにすることに最も気をつけました。",
    image: "/portfolio/cookpad-id.png",
    imageSize: { width: 790, height: 550 },
  },
  {
    id: "cookpad-pro-recipe",
    title: "cookpad プロのレシピ",
    year: 2019,
    company: "Cookpad",
    projectTypes: ["new"],
    sortOrder: 1,
    charge:
      "プロのレシピの立ち上げにあたり、UXデザインと開発ディレクターを担当しました。発足当初はデザイナーが不在であったため、プロトタイプの作成やユーザーインタビューも一人で行いました。",
    concept:
      "「あなたのキッチンがレシピの図書館に」\nクックパッドを数年使っていて、一般のユーザーが投稿したレシピでは満足できなくなってきたユーザーや、クックパッドのユーザー投稿レシピに興味がなかった層を取り込みたいという目的からこのコンセプトを作りました。",
    ingenuity:
      "既存のクックパッドにはない、プロのカメラマンによる料理写真が魅力的に見えるようなUIを意識し、サイトの設計を行いました。",
    image: "/portfolio/cookpad-pro-recipe.png",
    imageSize: { width: 600, height: 652 },
  },
];

export const portfoliosById = Object.fromEntries(
  portfolioItems.map((item) => [item.id, item])
) as Record<string, Portfolio>;
