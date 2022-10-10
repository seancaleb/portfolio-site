import Section from "../Section.component";
import {
    DownloadOutlined,
    GithubOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { ease } from "../../data/framer";

const Hero = () => {
    return (
        <Section className="relative">
            <div className="min-h-[100vh] flex flex-col col-span-12 justify-center py-[30vh] relative">
                <div className="absolute top-[45%] left-0 w-48 h-48 bg-[#0041C4] rounded-full translate -translate-x-12 xs:-translate-x-24 -translate-y-60 xs:-translate-y-48 bg-opacity-20 blur-3xl pointer-events-none" />

                <div className="absolute top-[55%] left-[25%] w-48 h-48 bg-primary rounded-full translate -translate-x-24 xs:-translate-x-48 -translate-y-60 xs:-translate-y-48 bg-opacity-20 blur-3xl pointer-events-none" />

                <motion.h1
                    {...animation}
                    transition={{
                        delay: 0.6,
                        ease,
                        duration: 0.6,
                    }}
                    className="text-[9.5vw] xs:text-4xl md:text-5xl tracking-[-.25px] font-medium text-white mb-4 leading-[120%] xs:leading-[140%] z-50"
                >
                    A self-taught{" "}
                    <span className="text-primary-light inline-block z-50">
                        front-end
                    </span>{" "}
                    developer
                </motion.h1>

                <motion.p
                    {...animation}
                    transition={{
                        delay: 0.7,
                        ease,
                        duration: 0.6,
                    }}
                    className="text-lg text-text max-w-[512px] mb-6 z-50"
                >
                    I&apos;m a self-taught developer with strong passion in
                    developing responsive web apps and creating reusable user
                    interfaces.
                </motion.p>

                <motion.div
                    {...animation}
                    transition={{
                        delay: 0.8,
                        ease,
                        duration: 0.6,
                    }}
                    className="flex gap-6 items-center z-50"
                >
                    <Link href="/resume">
                        <a
                            target="_blank"
                            className="px-6 py-2 text-[15px] uppercase font-medium border border-primary-light text-primary-light rounded-md hover:bg-primary-light hover:bg-opacity-5 trasition duration-300 flex gap-2"
                        >
                            <span className="inline-block mt-[2px]">
                                <DownloadOutlined className="text-primary-light text-base" />
                            </span>
                            <span className="inline-block">Resume</span>
                        </a>
                    </Link>

                    <div className="self-stretch border-l border-slate-700"></div>

                    <div className="flex gap-4">
                        <Link href="https://github.com/seancaleb">
                            <a target="_blank">
                                <GithubOutlined className="icon" />
                            </a>
                        </Link>

                        <Link href="https://www.linkedin.com/in/sean-caleb-ubias-b31018168/">
                            <a target="_blank">
                                <LinkedinOutlined className="icon" />
                            </a>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;

const animation = {
    initial: {
        y: 15,
        opacity: 0,
    },
    whileInView: { y: 0, opacity: 1 },
    viewport: {
        once: true,
        amount: 1,
    },
};
