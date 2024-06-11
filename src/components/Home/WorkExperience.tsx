export default function WorkExperience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Work Experience</h2>
          </div>
        </div>

        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-3xl lg:grid-cols-2">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Web director</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">レシピストア/プロのレシピ | 2012-2014</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">ユーザーファースト推進室 | 2015-2016</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">技術部/UXデザイングループ | 2016-2017</p>
          </div>

          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Freelance Designer</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">cookpad studio | 2017-2018</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">cookpadTV App | 2017-2018</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">storeTV | 2018-2020</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">cookpadLive App | 2020-2023</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Agu.スタイリスト App | 2023</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">東京大学薬学部 CIRCLe LIFF App | 2023-2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
