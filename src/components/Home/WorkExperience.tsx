export default function WorkExperience() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 my-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
          </div>
        </div>

        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Accountant</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">ABC Accounting Firm | 2018 - 2022</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Responsible for preparing financial statements, managing accounts payable and receivable, and
              providing financial analysis to clients.
            </p>
          </div>

          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Freelance Designer</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">2022 - Present</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Worked with various clients to create user-friendly and visually appealing designs for websites,
              mobile apps, and marketing materials.
            </p>
          </div>

          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Design Intern</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">XYZ Design Agency | Summer 2021</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Assisted the design team in creating wireframes, prototypes, and final designs for various client
              projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
