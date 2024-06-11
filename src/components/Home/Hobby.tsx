export default function Hobby() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold sm:text-5xl">Hobby</h2>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Design Tools</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Figma, Adobe XD, Sketch</p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Design Principles</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              User-centered design, visual hierarchy, typography, color theory
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Soft Skills</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Problem-solving, communication, adaptability, creativity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
