"use client"
import { Button } from "../ui/button";
import { motion } from "motion/react"

export function MainSection() {
    return (
        <>
            <div className="flex gap-4 justify-between items-center mt-36 ">
                <div className="px-12 flex flex-col items-center w-[40rem]">
                    <motion.h1

                        initial={{
                            y: 50,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            opacity: 1
                        }}

                        transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                        }}

                        className="text-6xl text-center font-bold text-blue-950 ">Every Home Service One App  Zero Hassles</motion.h1>
                    <motion.p

                        initial={{
                            y: 50,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            opacity: 1
                        }}

                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}

                        className="mt-6 mb-20 ">Book trusted pros for repairs, cleaning, and more — fast, easy, and reliable.</motion.p>
                    <motion.div

                        initial={{
                            y: 50,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            opacity: 1
                        }}

                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    >
                        <Button type="Action" name="Explore Service" onClick={() => { console.log("explore more") }} />
                    </motion.div>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4 ">
                        <motion.img

                            initial={{
                                x: -30,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}

                            src="/electrician.svg" alt="electrician image" height={250} width={250} className="shadow-blue-200 shadow-md rounded " />
                        <motion.img

                            initial={{
                                y: 30,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}

                            src="/plumber.svg" alt="plumber image" height={180} width={180} className="shadow-blue-200 shadow-md rounded " />
                    </div>
                    <div>
                        <motion.img
                            initial={{
                                x: 30,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut"
                            }}
                            src="/kitchen.svg" alt="kitchen cleaning" height={180} width={180} className="shadow-blue-200 shadow-md rounded mt-20 " />
                    </div>
                </div>

            </div>
        </>
    )
}