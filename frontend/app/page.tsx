import { MainSection } from "@/components/layouts/mainSection";
import { NavBar } from "@/components/layouts/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="px-10">
        <NavBar />
        <MainSection />
      </div>

    </>
  )
}
