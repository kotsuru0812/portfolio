import ProfileSection from "@/components/Home/ProfileSection";
import Portfolio from "@/components/Home/Portfolio";
import Hobby from "@/components/Home/Hobby";

import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 place-items-center">
        <ProfileSection />
        <Portfolio />
        <Hobby />
      </main>
    </>
  );
};
