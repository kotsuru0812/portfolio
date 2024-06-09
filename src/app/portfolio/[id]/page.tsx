import Image from "next/image"
import Header from "@/components/Header"

import { portfolios, porofilioIds } from "@/components/Portfolio"

type Params = {
  params: {
    id: porofilioIds,
  }
};

export default function Page({ params }: Params) {
  const portfolio = portfolios[params.id];

  return (
    <>
      <Header currentPath="Portfolio" />

      <main className="flex-1 place-items-center">
        <section className="w-full pt-6 md:pt-12 lg:pt-24">
          <div className="container mx-auto px-10">
            <div className="space-y-2 my-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
                {portfolio.title}
              </h2>
            </div>

            <div className="md:flex lg:space-x-8 sm:max-w-4xl lg:max-w-5xl place-self-center">
              <div className="md:basis-1/2 mb-8">
                <Image
                  alt={portfolio.title}
                  className="rounded-lg object-cover"
                  src={portfolio.image}
                  style={{
                    aspectRatio: (portfolio.imageSize.width / portfolio.imageSize.height),
                    objectFit: "cover",
                  }}
                  width={portfolio.imageSize.width}
                  height={portfolio.imageSize.height}
                />
              </div>

              <div className="md:basis-1/2">
                <div className="grid gap-1 mb-8">
                  <h3 className="text-xl font-bold tracking-tighter">担当</h3>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{portfolio.charge}</p>
                  </div>
                </div>

                {
                  portfolio.concept && (
                    <div className="grid gap-1 mb-8">
                      <h3 className="text-xl font-bold tracking-tighter">コンセプト</h3>
                      <div>
                        {
                          portfolio.concept.split("\n").map((line, index) => (
                            <p key={index} className="text-gray-500 dark:text-gray-400 mb-2">{line}</p>
                          ))
                        }
                    </div>
                    </div>
                  )
                }

                <div className="grid gap-1 mb-8">
                  <h3 className="text-xl font-bold tracking-tighter">工夫した点</h3>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">{portfolio.ingenuity}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

    </>
  );
}
