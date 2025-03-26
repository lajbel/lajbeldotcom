import juicyBeatBanner from "./assets/images/banners/juicybeat.png";
import kaboomjsBanner from "./assets/images/banners/kaboomjs.png";
import kaplayBanner from "./assets/images/banners/kaplay.png";
import newgroundsJsBanner from "./assets/images/banners/newgrounds.png";
import type { Project } from "./types";

type TagData = {
    icon: string;
    name: string;
};

export const tagData: Record<string, TagData> = {
    "github": {
        icon: "devicon:github",
        name: "GitHub",
    },
    "typescript": {
        icon: "devicon:typescript",
        name: "TypeScript",
    },
    "javascript": {
        icon: "devicon:javascript",
        name: "JavaScript",
    },
    "nodejs": {
        icon: "devicon:nodejs",
        name: "Node.js",
    },
    "nextjs": {
        icon: "devicon:nextjs",
        name: "Next.js",
    },
    "deno": {
        icon: "devicon:deno",
        name: "Deno",
    },
    "html5": {
        icon: "devicon:html5",
        name: "HTML5",
    },
    "astro": {
        icon: "devicon:astro",
        name: "Astro",
    },
    "game": {
        icon: "jam:gamepad-retro-f",
        name: "Game Dev",
    },
    "tool": {
        icon: "jam:tools-f",
        name: "Dev Tool",
    },
    "tailwindcss": {
        icon: "devicon:tailwindcss",
        name: "TailwindCSS",
    },
};

export const socials = [
    {
        name: "Itch.io",
        icon: "itchdotio",
        link: "https://lajbel.itch.io",
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
        title: "KAPLAY - A JavaScript game library",
        description:
            `KAPLAY is an open-source JavaScript library for creating 2D games, which I founded. Our main product is KAPLAY.js, a fun game library. Alongside it, we’ve built KAPLAYGROUND, our playground, Crew, our assets store and others.`,
        link: "https://kaplayjs.com",
        repo: "https://github.com/marklovers/kaplay",
        image: kaplayBanner,
        kind: "Developer Tool",
        tags: ["game", "tool", "typescript", "astro", "tailwindcss"],
    },
    {
        title: "Kaboom.js",
        description:
            `As the KAPLAY's predecessor, Kaboom.js was a 2D JavaScript game library where I worked as community manager and mantainer. I had also organised several game jams and events. It was a great experience :D`,
        link: "https://kaboomjs.com",
        repo: "https://github.com/replit/kaboom",
        image: kaboomjsBanner,
        kind: "Developer Tool",
        tags: ["game", "tool", "typescript", "nextjs", "nodejs"],
    },
    {
        title: "Juicy Beat",
        description:
            `My most recent videogame. Juicy Beat it's a rhythm game about cutting apples. It introduces new brand songs, cute characters and a different but fun gameplay!`,
        link: "https://lajbel.itch.io/juicy-beat",
        repo: "https://github.com/lajbel/juicy-beat",
        image: juicyBeatBanner,
        kind: "Videogame",
        tags: ["game", "typescript", "nodejs"],
    },
    {
        title: "Newgrounds.js",
        description:
            `Newgrounds.js makes it easy to integrate web games with Newgrounds.com, supporting features like achievements, scoreboards, and cloud saves—all with full TypeScript support.`,
        link: "https://newgrounds.lajbel.com",
        repo: "https://github.com/lajbel/newgrounds-js",
        image: newgroundsJsBanner,
        kind: "Developer Tool",
        tags: ["tool", "game", "typescript"],
    },
    // {
    //     title: "kiboom",
    //     description: `A set of tools for develop videogames easy, fast and
    //     with better developer experience.`,
    //     link: "https://kiboom.lajbel.com",
    //     repo: "https://github.com/labjel/kiboom",
    //     image: kiboomBanner,
    //     kind: "Developer Tool",
    //     tags: ["typescript", "nodejs"],
    //     featured: false,
    // },
    // {
    //     title: "Eggou",
    //     description: `A bullet hell game made in Kaboom.js. It's a
    //     project I made for a game jam.`,
    //     link: "https://www.newgrounds.com/portal/view/806710",
    //     repo: "https://github.com/lajbel/eggou",
    //     image: eggouBanner,
    //     kind: "Videogame",
    //     tags: ["javascript"],
    // },
    // {
    //     title: "MarkBot",
    //     description: `A ChatBot application for Discord, moderate, bring help
    //     and support in Official Kaboom.js Discord Server`,
    //     link: "https://github.com/lajbel/markbot",
    //     repo: "https://github.com/lajbel/markbot",
    //     image: markbotBanner,
    //     kind: "Chat Bot",
    //     tags: ["typescript"],
    // },
] satisfies Project[];
