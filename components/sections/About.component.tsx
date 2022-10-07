import { MailOutlined } from "@ant-design/icons";
import Section from "../Section.component";
import { motion } from "framer-motion";
import { transition } from "../../data/framer";

const About = () => {
    return (
        <Section className="section">
            <h4 className="section-heading">About</h4>
            <div className="flex flex-col gap-8 col-span-12 md:col-span-9">
                <motion.p {...animation} className="text-slate-500 text-lg">
                    I&apos;m a passionate{" "}
                    <span className="underline text-primary-light">
                        front-end
                    </span>{" "}
                    developer{" "}
                    <span className="underline text-primary-light">
                        specializing in React and TypeScript
                    </span>{" "}
                    based in the{" "}
                    <span className="underline text-primary-light">
                        Philippines
                    </span>
                    . I love developing responsive web applications and user
                    interfaces that offer the best experience for users.
                </motion.p>
                <motion.p {...animation} className="text-text text-lg">
                    Currently, I&apos;m exploring backend programming or
                    improving my front-end skill set. I&apos;m also open to any
                    front-end role where I can use my skills to help contribute
                    to any existing codebase and, at the same time, learn best
                    practices from experienced developers.
                </motion.p>

                <motion.div {...animation} className="flex flex-col gap-2">
                    <div className="flex gap-6 items-center">
                        <MailOutlined className="icon" />
                        <p className="text-slate-300 text-lg">
                            scmubias@gmail.com
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;

const animation = {
    initial: {
        opacity: 0,
    },
    whileInView: { opacity: 1 },
    transition: {
        ...transition,
        delay: 0.5,
    },
    viewport: {
        once: true,
        amount: 1,
    },
};
