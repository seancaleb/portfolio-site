import { nanoid } from "nanoid";
import { Project } from "../types";

const projects: Project[] = [
    {
        id: nanoid(),
        title: "Note IT",
        description:
            "A demo MERN web application that allow authenticated users to perform CRUD operations.",
        alt: "Note landing page",
        link: "https://note-it-mern.vercel.app/",
        githubLink: "https://github.com/seancaleb/note-it-mern",
        technologies: [
            "react.js",
            "typescript",
            "redux",
            "material ui",
            "node.js",
            "mongodb",
            "express",
        ],
    },
    {
        id: nanoid(),
        title: "SN Crypto",
        description:
            "A demo crypto application that uses the coingecko api to fetch data related to cryptocurrencies. ",
        alt: "Crypto landing page",
        link: "https://sn-crypto.vercel.app/",
        githubLink: "https://github.com/seancaleb/sn-crypto",
        technologies: ["react.js", "typescript", "redux", "chakra ui"],
    },
    {
        id: nanoid(),
        title: "SNCMRCE",
        description:
            "An e-commerce web application that integrates Commerce JS to display storefront products.",
        alt: "Ecommerce landing page",
        link: "https://sn-commerce.vercel.app/",
        githubLink: "https://github.com/seancaleb/sn-commerce-react",
        technologies: [
            "react.js",
            "javascript",
            "redux",
            "firebase",
            "commerce.js",
            "chakra ui",
        ],
    },
    {
        id: nanoid(),
        title: "SN Movies",
        description:
            "A demo movie application that uses the tmdb api to fetch data related to movies and casts. ",
        alt: "Movie landing page",
        link: "https://sn-movie-react-app.vercel.app/",
        githubLink: "https://github.com/seancaleb/sn-movie-react-app",
        technologies: ["react.js", "javascript", "redux", "chakra ui"],
    },
];

export default projects;
