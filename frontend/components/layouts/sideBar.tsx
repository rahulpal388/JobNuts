import { ChevronLeft } from "lucide-react";
import { navItmes } from "./navBar";
import { navItems } from "@/constant/navConstant";
import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react"


export function SideBar({ setSideBarOpen, isSideBarOpen }: {
    setSideBarOpen: Dispatch<SetStateAction<boolean>>,
    isSideBarOpen: boolean
}) {

    return (
        <>

            <AnimatePresence>
                {isSideBarOpen && (
                    <motion.div

                        exit={{
                            opacity: 0,
                            width: 0
                        }}

                        initial={{
                            opacity: 0,
                            width: 0
                        }}

                        animate={{
                            opacity: 1,
                            width: 192
                        }}
                        transition={{
                            duration: 0.3
                        }}

                        className="bg-amber-300 w-48 absolute inset-0 px-4  ">
                        <div className=" w-full  flex justify-end">
                            <ChevronLeft className="size-10 stroke-2" onClick={() => { setSideBarOpen(false) }} />
                        </div>
                        <div className="mt-12 flex flex-col gap-6  ">
                            {navItmes.map((item, i) => (
                                <div className="hover:bg-blue-100 rounded py-1 " key={i}>
                                    <h1 className="text-center " >{item.name}</h1>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}