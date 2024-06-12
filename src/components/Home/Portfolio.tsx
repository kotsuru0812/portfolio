import Image from 'next/image';
import Link from 'next/link';
import { portfolios } from "@/components/Portfolio"

export default function Portfolio() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-24">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Portfolio</h2>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        {
          Object.values(portfolios).map((portfolio) => {
            return(
              <div key={portfolio.id} className="grid gap-1">
                <Link href={`/portfolio/${portfolio.id}`}>
                <h3 className="text-lg mb-2 font-bold">{portfolio.title}</h3>
                <Image
                  alt={portfolio.title}
                  className="object-cover"
                  height="400"
                  src={portfolio.image}
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                </Link>
              </div>
            )
          })
        }
        </div>
      </div>
    </section>
  );
}
