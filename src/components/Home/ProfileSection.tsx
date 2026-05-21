import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { workExperienceByCompany } from "@/components/Home/workExperience";

export default function ProfileSection() {
  return (
    <section className="w-full pt-4 pb-12 md:pt-6 md:pb-14">
      <div className="container mx-auto px-10 lg:px-20 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6 pb-8 md:pb-10 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center justify-center gap-4 shrink-0">
            <Image
              alt="Yoko Daikoku"
              className="rounded-full w-20 h-20 object-cover shrink-0"
              height={80}
              src="/yokodaikoku.jpg"
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
              width={80}
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
                Yoko Daikoku
              </h1>
              <p className="mt-0.5 text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
                UI/UX Designer
              </p>
              <a
                href="https://github.com/kotsuru0812/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="GitHub リポジトリ（ポートフォリオサイト）"
              >
                <SiGithub className="h-4 w-4 shrink-0" aria-hidden />
                <span className="break-all">github.com/kotsuru0812/portfolio</span>
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 md:max-w-md">
            強みはインフォメーションアーキテクトとUIデザインです。
            使い手に寄り添ったデザインを心がけています。
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <h2 className="text-2xl font-bold sm:text-3xl mb-6 md:mb-8 text-center">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {workExperienceByCompany.map((group) => (
              <div key={group.company} className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-center leading-none bg-gray-200 dark:bg-slate-600 px-2 h-6 flex items-center justify-center">
                  {group.company}
                </h3>
                <ul className="grid gap-1 list-none p-0 m-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
