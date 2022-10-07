import { Tooltip } from "@chakra-ui/react";
import { Skill } from "../../types";
import BlurImage from "../BlurImage.component";
import Section from "../Section.component";
import { motion } from "framer-motion";
import { transition } from "../../data/framer";

const Skills = ({ skills }: { skills: Skill[] }) => {
    return (
        <Section className="section">
            <h4 className="section-heading">Skills</h4>

            <motion.div
                {...animation}
                className="grid grid-cols-12 gap-x-8 gap-y-8 col-span-12"
            >
                {skills.map((skill, index) => {
                    return (
                        <Tooltip
                            key={skill.id}
                            placement="right"
                            openDelay={200}
                            gutter={12}
                            fontSize="md"
                            label={skill.title}
                        >
                            <div className="relative h-9 w-9 xs:h-11 xs:w-11 col-span-4 sm:col-span-3 md:col-span-3 flex">
                                <BlurImage
                                    src={skill.src}
                                    alt={skill.title}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </Tooltip>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Skills;

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
