import { MainSection } from "@/components/layouts/mainSection";
import { NavBar } from "@/components/layouts/navBar";
import { PopularSerrvice } from "@/components/layouts/popularService";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-10">
        <NavBar />
        <MainSection />
        <div className="mt-24">
          <PopularSerrvice />
        </div>
      </div>

    </>
  )
}
