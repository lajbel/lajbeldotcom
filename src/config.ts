import eggouBanner from "./assets/images/banners/eggou.png";
import kaboomjsBanner from "./assets/images/banners/kaboomjs.png";
import kaplayBanner from "./assets/images/banners/kaplay.png";
import kiboomBanner from "./assets/images/banners/kiboom.png";
import mandarinaBanner from "./assets/images/banners/mandarina.png";
import markbotBanner from "./assets/images/banners/markbot.png";
import newgroundsjsBanner from "./assets/images/banners/newgrounds.png";
import type { Project } from "./types";

export const iconNames = {
    "github": "GitHub",
    "typescript": "TypeScript",
    "javascript": "JavaScript",
    "nodejs": "Node.js",
    "nextjs": "Next.js",
    "deno": "Deno",
};

export const socials = [
    {
        name: "Twitter",
        icon: "x",
        link: "https://x.com/lajbel",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://linkedin.com/in/lajbel",
    },
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/lajbel",
    },
    {
        name: "Ko-fi",
        icon: "kofi",
        link: "https://ko-fi.com/lajbel",
    },
];

export const importantLinks = [
    {
        title: "About",
        link: "/",
    },
    {
        title: "Projects",
        link: "/projects",
    },
];

export const projects = [
    {
        title: "Mandarina",
        description: `A JavaScript Visual novel engine, made with Kaboom.js. 
        Optimized for beginners, easy to use and highly customizable.`,
        link: "https://lajbel.github.io/mandarina",
        repo: "https://github.com/lajbel/mandarina",
        image: mandarinaBanner,
        kind: "Developer Tool",
        tags: ["typescript", "nodejs"],
        featured: false,
    },
    {
        title: "KAPLAY",
        description:
            `KAPLAY is the open source successor of Kaboom.js. I work as
        the main manager of the project, developing the core engine, the website,
        the editor and the community.`,
        link: "https://kaplayjs.com",
        repo: "https://github.com/marklovers/kaplay",
        image: kaplayBanner,
        kind: "Developer Tool",
        tags: ["typescript", "nodejs"],
        featured: true,
    },
    {
        title: "Kaboom.js",
        description: `The easiest way to make games using JavaScript. Kaboom is
        a game library, I contributed to the project with the website and the
        core engine, also being community manager. Sadly, the project was
        discontinued.`,
        link: "https://kaboomjs.com",
        repo: "https://github.com/replit/kaboom",
        image: kaboomjsBanner,
        kind: "Developer Tool",
        tags: ["typescript", "nextjs", "nodejs"],
        featured: true,
    },
    {
        title: "kiboom",
        description: `A set of tools for develop videogames easy, fast and 
        with better developer experience.`,
        link: "https://kiboom.lajbel.com",
        repo: "https://github.com/labjel/kiboom",
        image: kiboomBanner,
        kind: "Developer Tool",
        tags: ["typescript", "nodejs"],
        featured: false,
    },
    {
        title: "Eggou",
        description: `A bullet hell game made in Kaboom.js. It's a
        project I made for a game jam.`,
        link: "https://www.newgrounds.com/portal/view/806710",
        repo: "https://github.com/lajbel/eggou",
        image: eggouBanner,
        kind: "Videogame",
        tags: ["javascript"],
    },
    {
        title: "Newgrounds.js",
        description: `API Wrapper for Newgrounds, made with TypeScript.`,
        link: "https://newgrounds.lajbel.com",
        repo: "https://github.com/lajbel/newgrounds-js",
        image: newgroundsjsBanner,
        kind: "Developer Tool",
        tags: ["typescript"],
    },
    {
        title: "MarkBot",
        description: `A ChatBot application for Discord, moderate, bring help
        and support in Official Kaboom.js Discord Server`,
        link: "https://github.com/lajbel/markbot",
        repo: "https://github.com/lajbel/markbot",
        image: markbotBanner,
        kind: "Chat Bot",
        tags: ["typescript"],
    },
] satisfies Project[];
