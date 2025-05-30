"use client"
import { useScroll, useTransform, motion, useMotionTemplate } from "motion/react";
import { serviceCard } from "../../constant/serviceCard.constant";
import { ServiceCard } from "../ui/serviceCard";
import { useRef } from "react";



export function PopularSerrvice() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacityContant = useTransform(scrollYProgress, [0, 0.1], [10, 0]);
    const translateTitle = useTransform(scrollYProgress, [0, 0.1], [100, 0])

    return (
        <>
            <div

                className="pb-20" ref={ref} >
                <div>
                    <motion.h1
                        initial={{
                            y: 100
                        }}
                        style={{
                            filter: useMotionTemplate`blur(${opacityContant}px)`,
                            y: translateTitle

                        }}
                        className="text-4xl font-bold text-blue-950 text-center  ">Popular Service</motion.h1>

                </div>
                <div className="mt-12  flex gap-6 flex-wrap justify-center items-center">
                    {serviceCard.map((item, i) => (
                        <ServiceCard key={i} title={item.title} description={item.description} href={item.href} />
                    ))}
                </div>
            </div>
        </>
    )
}