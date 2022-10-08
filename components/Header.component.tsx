import { GithubOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { transition } from "../data/framer";

const Header = () => {
    return (
        <header className="font-helvetica pt-8  absolute z-10 top-0 left-0 right-0 w-full">
            <motion.div
                {...animation}
                className="h-full max-w-5xl mx-auto flex items-center justify-between px-6 sm:px-8 md:px-12"
            >
                <Link href="/">
                    <a className="text-lg font-medium text-white">
                        <span className="text-[#7992C4] inline-block">SN</span>
                        CLB
                    </a>
                </Link>

                <Link href="https://github.com/seancaleb/portfolio-site">
                    <a target="_blank" className="flex items-center gap-4">
                        <GithubOutlined className="icon" />
                    </a>
                </Link>
            </motion.div>
        </header>
    );
};

export default Header;

const animation = {
    initial: {
        y: -30,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    transition,
};
