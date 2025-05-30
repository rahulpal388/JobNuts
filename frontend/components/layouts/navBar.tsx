"use client"
import { AlignLeft } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { SideBar } from "./sideBar"
import { motion, scale } from "motion/react"

export const navItmes = [{ name: "Home" }, { name: "Service" }, { name: "How Its Work" }, { name: "About" }]




export function NavBar() {
    const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
    const varient = {
        draw: {
            opacity: 0.8,

        }
    }
    const childVarient = {
        draw: {
            width: "100%"
        }
    }



    return (
        <>

            <motion.div

                initial={{
                    y: -50,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 0.7,
                    ease: "easeInOut"
                }}


                className="flex justify-between items-center py-4 fixed top-0 left-0 w-full px-20 bg-blue-50
                z-50   ">
                {/* logo */}
                <div className="max-md:hidden">
                    <h1 className="lg:text-3xl text-xl font-light italic tracking-wider ">JobNuts</h1>
                </div>

                <div className="hidden max-md:block  ">
                    <AlignLeft className="cursor-pointer size-8 " onClick={() => { setSideBarOpen(prev => !prev) }} />
                </div>
                <SideBar setSideBarOpen={setSideBarOpen} isSideBarOpen={isSideBarOpen} />
                {/* navigation items */}
                <div className="flex gap-6 items-center max-md:hidden ">
                    {
                        navItmes.map((item, i) => (
                            <motion.div

                                whileHover={"draw"}
                                variants={varient}
                                transition={{
                                    duration: 0.3
                                }}

                                key={i} className="cursor-pointer p-2">
                                <h4 className="text-lg " >{item.name}</h4>
                                <motion.div
                                    initial={{
                                        width: 0
                                    }}
                                    variants={childVarient}

                                    className=" h-1  bg-blue-500  "></motion.div>
                            </motion.div>
                        ))
                    }
                </div>
                {/* action items */}
                <div className="flex gap-6 items-center max-sm:hidden ">
                    <a href="#">Customer Login</a>
                    <Button type="Action" onClick={() => { console.log("primary") }} name="Sign in" />
                </div>
            </motion.div >
        </>
    )
}