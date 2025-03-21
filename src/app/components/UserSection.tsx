"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function UserSection() {

    const words = ["MERN Stack Developer", "Backend Developer ", "Frontend Developer", "Web Developer"];

    return (
        <section className="lg:py-16">
            <div className="h-[34rem] w-full grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 z-30 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="bg-gradient-to-r from-blue-400 to-orange-600 bg-clip-text text-transparent">
                            Hello, I&apos;m{" "} Dhanji Bhagat
                        </span>
                        <br></br>
                        <FlipWords words={words} /> <br />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Passionate about creating elegant solutions to complex problems through clean and efficient code.
                    </p>
                    <div className="">
                        <Link href="mailto:dhanji2bhagat@gmail.com" className="px-6 block relative z-40 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-orange-500 hover:bg-slate-200 text-white">
                            Hire Me
                        </Link>
                        {/* <Link href="/doc/Dhanji_Bhagat_MERN_Stack.pdf" target="_blank" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-orange-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link> */}
                    </div>
                </motion.div>
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] z-10 relative"> */}
                {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                        <EvervaultCard text="DB" /> */}

                {/* <div className="h-[40rem] flex items-center justify-center"> */}
                {/* <TextHoverEffect text="DB" /> */}
                {/* </div> */}
                {/* <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        /> */}
                {/* </div>
                </motion.div> */}
                {/* <div className="rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"> */}


                    <BackgroundBeams />
                {/* </div> */}
            </div>
        </section>
    );
}
