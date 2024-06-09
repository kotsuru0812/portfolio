import Name from "@/components/Home/Name";
import Portfolio from "@/components/Home/Portfolio";
import WorkExperience from "@/components/Home/WorkExperience";
import Skills from "@/components/Home/Skills";

export default function Page() {
  return (
    <main className="flex-1 place-items-center">
      <Name />
      <Portfolio />
      <WorkExperience />
      <Skills />
    </main>
  )
}

