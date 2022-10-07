import Image from "next/image";
import { Project } from "../../types";
import ProjectList from "../ProjectList.component";
import Section from "../Section.component";

const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <Section className="section relative">
            <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-48 h-48 bg-[#0041C4] rounded-full bg-opacity-10 blur-3xl" />

            <h4 className="section-heading">Projects</h4>
            <ProjectList projects={projects} />
        </Section>
    );
};

export default Projects;
