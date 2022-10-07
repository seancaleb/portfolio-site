import { Project, Skill } from "../types";

let URL: string;

if (process.env.NODE_ENV === "development") {
    URL = "http://localhost:3000/";
} else if (process.env.NODE_ENV === "production") {
    const { URL: prodUrl } = process.env;
    URL = prodUrl!;
}

export const loadSkills = async (): Promise<Skill[]> =>
    await (await fetch(URL + "api/skills")).json();

export const loadProjects = async (): Promise<Project[]> =>
    await (await fetch(URL + "api/projects")).json();
