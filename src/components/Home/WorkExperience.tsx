export default function WorkExperience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Work Experience</h2>
          </div>
        </div>

        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-3xl lg:grid-cols-2">
          <div className="grid gap-1">
            <h3 className="text-xl mb-2">Web Director</h3>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2012-2014 | レシピストア/プロのレシピ</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2015-2016 | ユーザーファースト推進室</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2016-2017 | 技術部/UXデザイングループ</p>
          </div>

          <div className="grid gap-1">
            <h3 className="text-xl mb-2">Freelance Designer</h3>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2017-2018 | cookpad studio</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2017-2018 | cookpadTV App</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2018-2020 | storeTV</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2020-2023 | cookpadLive App</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2023-2023 | Agu.スタイリスト App</p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">2023-2024 | 東京大学薬学部 CIRCLe LIFF App</p>
          </div>
        </div>
      </div>
    </section>
  );
}
