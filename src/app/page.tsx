import ProfileSection from "@/components/Home/ProfileSection";
import Portfolio from "@/components/Home/Portfolio";
import Hobby from "@/components/Home/Hobby";

import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 place-items-center">
        <div className="w-full text-center pt-6 md:pt-10 pb-2">
          <h2 className="text-3xl font-bold sm:text-5xl">Portfolio</h2>
        </div>
        <ProfileSection />
        <Portfolio />
        <Hobby />
      </main>
    </>
  );
}
