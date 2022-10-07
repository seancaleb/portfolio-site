import { Project } from "../types";
import { motion } from "framer-motion";
import { transition } from "../data/framer";
import { ChromeOutlined, GithubOutlined } from "@ant-design/icons";
import Link from "next/link";
import { nanoid } from "nanoid";
import { Tooltip } from "@chakra-ui/react";

type ProjectListProps = {
    projects: Project[];
};

type ProjectItemProps = {
    project: Project;
};

const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 sm:gap-4 lg:gap-6">
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

function ProjectItem({ project }: ProjectItemProps) {
    return (
        <motion.div
            {...animation}
            className="col-span-12 md:col-span-6 bg-transparent border border-primary-light p-6 lg:p-8 shadow-md rounded-md overflow-clip z-50"
        >
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="font-medium text-xl text-white mb-2 leading-[140%]">
                        {project.title}
                    </h2>
                    <p className="text-text text-base mb-6 min-h-0 md:min-h-[100px] lg:min-h-0">
                        {project.description}
                    </p>
                    <div className="flex gap-4">
                        <Tooltip
                            placement="bottom-end"
                            openDelay={200}
                            gutter={12}
                            fontSize="md"
                            label="Link"
                        >
                            <div>
                                <Link href={project.link}>
                                    <a target="_blank">
                                        <ChromeOutlined className="icon" />
                                    </a>
                                </Link>
                            </div>
                        </Tooltip>
                        <Tooltip
                            placement="bottom-end"
                            openDelay={200}
                            gutter={12}
                            fontSize="md"
                            label="GitHub"
                        >
                            <div>
                                <Link href={project.githubLink}>
                                    <a target="_blank">
                                        <GithubOutlined className="icon" />
                                    </a>
                                </Link>
                            </div>
                        </Tooltip>
                    </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => {
                        return (
                            <div
                                key={nanoid()}
                                className="border border-primary-light rounded-md py-1 px-2"
                            >
                                <h5 className="uppercase text-xs font-medium text-primary">
                                    {tech}
                                </h5>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectList;

const animation = {
    initial: {
        opacity: 0,
    },
    whileInView: { opacity: 1 },
    transition,
    viewport: {
        once: true,
        amount: 1,
    },
};
