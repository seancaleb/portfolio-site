import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { Section } from "../components";
import { ease } from "../data/framer";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Sean Caleb</title>
            </Head>
            <Section>
                <div className="min-h-[100vh] flex flex-col col-span-12 justify-center items-center relative">
                    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-48 h-48 bg-[#0041C4] rounded-full bg-opacity-10 blur-3xl pointer-events-none" />

                    <div className="flex flex-col items-center gap-4 mb-6">
                        <motion.h1
                            {...animation}
                            transition={{
                                delay: 0.6,
                                ease,
                                duration: 0.6,
                            }}
                            className="text-[10vw] xs:text-4xl md:text-5xl tracking-[-.25px] font-medium text-white"
                        >
                            <span className="inline-block text-primary-light">
                                404
                            </span>{" "}
                            Not Found
                        </motion.h1>

                        <motion.p
                            {...animation}
                            transition={{
                                delay: 0.7,
                                ease,
                                duration: 0.6,
                            }}
                            className="text-lg text-text max-w-[512px]"
                        >
                            Page doesn&apos;t exist.
                        </motion.p>
                    </div>

                    <motion.div
                        {...animation}
                        transition={{
                            delay: 0.8,
                            ease,
                            duration: 0.6,
                        }}
                    >
                        <Link href="/">
                            <a className="btn btn-primary">Back to home</a>
                        </Link>
                    </motion.div>
                </div>
            </Section>
        </>
    );
};

export default NotFound;

const animation = {
    initial: {
        y: 15,
        opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
};
