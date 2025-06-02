import Footer from "@/components/layouts/footer";
import { HowItWork } from "@/components/layouts/howItWork";
import { MainSection } from "@/components/layouts/mainSection";
import { NavBar } from "@/components/layouts/navBar";
import { PopularSerrvice } from "@/components/layouts/popularService";
import WhyJobNut from "@/components/layouts/WhyJobNut";
import { div } from "motion/react-client";

// export default function Home() {
//   return (
//     <>
//       <div className=" bg-red-400 w-screen h-screen   container ">
//         {/* <NavBar /> */}
//         {/* <MainSection />
//         <PopularSerrvice />
//         <HowItWork /> */}
//       </div>
//     </>
//   )
// }



export default function Home() {

  return (
    <>
      <div className=" flex   ">
        <div className="w-full flex flex-col   gap-12 ">
          <NavBar />
          <MainSection />
          <PopularSerrvice />
          {/* <HowItWork /> */}
          <WhyJobNut />
          <Footer />
        </div>
      </div>
    </>
  )
}