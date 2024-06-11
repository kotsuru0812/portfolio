import Image from 'next/image';

export default function Name() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16 lg:px-40">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold sm:text-4xl md:text-5xl lg:pt-8 xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Yoko Daikoku
            </h1>
            <p className="text-gray-500 mt-4 md:text-xl dark:text-gray-400">UI/UX Designer</p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <Image
              alt="Yoko Daikoku"
              className="rounded-full w-[200px] h-[200px] object-cover place-self-center"
              height="400"
              src="/yokodaikoku.jpg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


