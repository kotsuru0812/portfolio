export type porofilioIds = "agu" | "cookpad-pro-recipe" | "cookpad-storetv" | "cookpad-id" | "cookpad-kitchen-star" | "cookpad-studio" | "cookpad-tv" | "circle-life";

export type Portfolio = {
  id: porofilioIds,
  title: string;
  charge: string;
  concept: string | undefined;
  ingenuity: string;
  image: string;
  imageSize: { width: number, height: number };
};

export const portfolios: Record<porofilioIds, Portfolio> = {
  "circle-life": {
    id: "circle-life",
    title: "CIRCLe LIFFアプリ",
    charge: "LINE上で動く、ウェブアプリのUIデザインを担当しました。",
    concept: undefined,
    ingenuity: "子供の特定疾患ということで、両親が操作すること、遺伝性の疾患であるため、兄弟姉妹がいる場合は複数の患者の情報を登録できる必要がありました。そのため、患者ごとにテーマカラーを登録できるようにし、アプリ自体は白ベースのシンプルなものにしました。",
    image: "/portfolio/circle-life.png",
    imageSize: { width: 666, height: 692 },
  },
  "agu": {
    id: "agu",
    title: "Agu. スタイリストアプリ",
    charge: "既存アプリのリニューアルにともない、Android/iOS アプリのUX/UIデザインを担当しています。",
    concept: undefined,
    ingenuity: "ブランドカラーのダークグレーを軸にし、ファーストビューに全ての機能の導線を配置しました。報酬のグラフを配置することで、一目で今の売上状況が確認できるようにしています。",
    image: "/portfolio/agu.png",
    imageSize: { width: 666, height: 630 },
  },
  "cookpad-tv": {
    id: "cookpad-tv",
    title: "cookpadTV アプリ",
    charge: "Android/iOS アプリのUX/UIデザインを担当しています。",
    concept: "「一緒に料理が作れるライブ」\nプロの料理家などがライブ配信することで、離れた場所でも一緒に料理を作り、料理を学ぶことができるアプリをコンセプトにしています。",
    ingenuity: "クッキングLIVEらしく料理が映えるデザインを意識しました。Android、iOSそれぞれのデザインガイドラインに沿ったデザインにしています。",
    image: "/portfolio/cookpad-tv.png",
    imageSize: { width: 790, height: 550 },
  },
  "cookpad-storetv": {
    id: "cookpad-storetv",
    title: "storeTV-流通向けサイネージ",
    charge: "流通向けサイネージ端末のUX/UIデザイン、端末選定、開発ディレクションを担当しました。展示会などのクリエイティブや大型サイネージの枠デザインも担当しました。",
    concept: undefined,
    ingenuity: "流通の売場スタッフが簡単に操作できるように、自動化できる機能はすべて自動化しました。既存プロダクトを引き継いだので、課題から改善点を提案し、スムーズに運用ができるようにし、MDMを自前で開発することで、大幅なコスト削減を実現しました。",
    image: "/portfolio/cookpad-storetv.png",
    imageSize: { width: 700, height: 621 },
  },
  "cookpad-studio": {
    id: "cookpad-studio",
    title: "cookpad studio アプリ",
    charge: "使用するカメラの選定からアプリのUX/UIデザインを担当しました。アプリストアで配布しているアプリではなく、インハウスアプリとなります。",
    concept: "「誰でも簡単に料理動画が撮影できるアプリ」\n一般のユーザーが気軽に料理動画を撮影できる場所と機材を提供し、プロ並みの料理動画が作れてしまうアプリにすることがコンセプトとなっています。",
    ingenuity: "見た目は徹底的にシンプルにし、動画編集などの機能は必要最低限に絞ることにより、迷いのない操作性とプロ並みの動画編集を実現することができました。",
    image: "/portfolio/cookpad-studio.png",
    imageSize: { width: 641, height: 643 },
  },
  "cookpad-pro-recipe": {
    id: "cookpad-pro-recipe",
    title: "cookpad プロのレシピ",
    charge: "プロのレシピの立ち上げにあたり、UXデザインと開発ディレクターを担当しました。発足当初はデザイナーが不在であったため、プロトタイプの作成やユーザーインタビューも一人で行いました。",
    concept: "「あなたのキッチンがレシピの図書館に」\nクックパッドを数年使っていて、一般のユーザーが投稿したレシピでは満足できなくなってきたユーザーや、クックパッドのユーザー投稿レシピに興味がなかった層を取り込みたいという目的からこのコンセプトを作りました。",
    ingenuity: "既存のクックパッドにはない、プロのカメラマンによる料理写真が魅力的に見えるようなUIを意識し、サイトの設計を行いました。",
    image: "/portfolio/cookpad-pro-recipe.png",
    imageSize: { width: 600, height: 652 },
  },
  "cookpad-id": {
    id: "cookpad-id",
    title: "cookpad ユーザー基盤刷新",
    charge: "クックパッドのユーザー基盤のUX/UIデザインを担当しました。リリーススピードをあげるために、Sassを用いてマークアップまでを行いました。",
    concept: "「シンプルでスマートなユーザー基盤」\nSMS認証を導入することにより、ユーザーの生活環境にそったユーザー基盤を構築し、ブラウザを閉じることなくユーザー登録が完了するスマートな設計にしました。",
    ingenuity: "ユーザー登録に関するUIは複雑で分かりにくいものになっていたため、必要最低限の情報だけに絞り、画面自体をシンプルにすることに最も気をつけました。",
    image: "/portfolio/cookpad-id.png",
    imageSize: { width: 790, height: 550 },
  },
  "cookpad-kitchen-star": {
    id: "cookpad-kitchen-star",
    title: "cookpad キッチンスター",
    charge: "サイト全体のUIデザインを担当しました。",
    concept: "「SNSで ”魅せる”料理を仕事にする」\nSNSを通じて料理を魅力的に表現することで、新たな仕事のチャンスを掴める人を増やしたい。",
    ingenuity: "写真や人物に目がいきやすいように、白ベースで色を少なくしました。キーカラーも落ち着いた色を選定しております。",
    image: "/portfolio/cookpad-kitchen-star.png",
    imageSize: { width: 480, height: 908 },
  },
};
