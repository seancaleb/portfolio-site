import { InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { transition } from "../data/framer";

const Footer = () => {
    return (
        <footer className="font-body h-36 absolute z-10 bottom-0 left-0 w-full">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
                <motion.hr
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={transition}
                    className="border-slate-700"
                />
            </div>
            <motion.div
                {...animation}
                className="h-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center gap-4 sm:gap-2 px-6 sm:px-8 md:px-12"
            >
                <p className="text-text text-xs uppercase">
                    Designed and developed by Sean Caleb
                </p>

                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href="https://twitter.com/snclbb">
                                <a target="_blank">
                                    <TwitterCircleFilled className="icon" />
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="https://www.instagram.com/seanclbb/">
                                <a target="_blank">
                                    <InstagramFilled className="icon" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </motion.div>
        </footer>
    );
};

export default Footer;

const animation = {
    initial: {
        y: 30,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    transition,
};
