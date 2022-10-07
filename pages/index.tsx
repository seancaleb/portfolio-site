import {
    GetStaticProps,
    InferGetStaticPropsType,
    InferGetServerSidePropsType,
    GetServerSideProps,
} from "next";
import Head from "next/head";
import { About, Hero, Projects, Skills } from "../components";
import { Project, Skill } from "../types";
import { loadSkills, loadProjects } from "../utils";

type HomepageProps = {
    skills: Skill[];
    projects: Project[];
};

const Home = ({
    skills,
    projects,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>Sean Caleb</title>
            </Head>
            <>
                <Hero />
                <About />
                <Skills skills={skills} />
                <Projects projects={projects} />
            </>
        </>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps<
    HomepageProps
> = async () => {
    const skills = await loadSkills();
    const projects = await loadProjects();

    return {
        props: {
            skills,
            projects,
        },
    };
};
