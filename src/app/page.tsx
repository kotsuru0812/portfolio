import Name from "@/components/Home/Name";
import Portfolio from "@/components/Home/Portfolio";
import WorkExperience from "@/components/Home/WorkExperience";
import Hobby from "@/components/Home/Hobby";

import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 place-items-center">
        <Name />
        <Portfolio />
        <WorkExperience />
        <Hobby />
      </main>
    </>
  )
}

