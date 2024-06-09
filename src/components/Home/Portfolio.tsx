import Image from 'next/image';

export default function Portfolio() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Portfolio</h2>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <Image
              alt="Project 1"
              className="rounded-lg object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <h3 className="text-lg font-bold">Project 1</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Designed a responsive website for a local cafe, focusing on a clean and modern aesthetic.
            </p>
          </div>
          <div className="grid gap-1">
            <Image
              alt="Project 2"
              className="rounded-lg object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <h3 className="text-lg font-bold">Project 2</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Created a mobile app prototype for a fitness tracking service, focusing on intuitive user experience.
            </p>
          </div>
          <div className="grid gap-1">
            <Image
              alt="Project 3"
              className="rounded-lg object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <h3 className="text-lg font-bold">Project 3</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Designed marketing materials for a local non-profit organization, including a brochure and social
              media graphics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
