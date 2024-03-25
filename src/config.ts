import eggouBanner from "./assets/images/banners/eggou.png";
import kaboomjsBanner from "./assets/images/banners/kaboomjs.png";
import mandarinaBanner from "./assets/images/banners/mandarina.png";
import markbotBanner from "./assets/images/banners/markbot.png";
import newgroundsjsBanner from "./assets/images/banners/newgroundsjs.png";
import type { Project } from "./types";

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
        kind: "Library",
        tags: ["TypeScript", "Node.js"],
        featured: true,
    },
    {
        title: "Kaboom.js",
        description: `A games library that I contribute to. 
        I heard about it in 2021, and I started contributing with the website,
        new demos, plugins, and documentation. Also I've worked in Replit for
        the development of the version 3000.`,
        link: "https://kaboomjs.com",
        repo: "https://github.com/replit/kaboom",
        image: kaboomjsBanner,
        kind: "Library",
        tags: ["TypeScript", "Next.js", "Node.js"],
        featured: true,
    },
    {
        title: "Eggou",
        description: `A bullet hell game made in Kaboom.js. It's a
        project I made for a game jam.`,
        link: "https://lajbel.itch.io/eggou",
        repo: "https://github.com/lajbel/eggou",
        image: eggouBanner,
        kind: "Game",
        tags: ["JavaScript", "Kaboom.js"],
    },
    {
        title: "Newgrounds.js",
        description: `API Wrapper for Newgrounds, made with TypeScript.`,
        link: "https://lajbel.github.io/newgrounds.js",
        repo: "https://github.com/lajbel/eggou",
        image: newgroundsjsBanner,
        kind: "Library",
        tags: ["API Usage", "TypeScript"],
    },
    {
        title: "MarkBot",
        description: `A Chatbot application for Discord, made for bring help
        and support with Kaboom.js.`,
        link: "https://github.com/lajbel/markbot",
        repo: "https://github.com/lajbel/markbot",
        image: markbotBanner,
        kind: "Chat Bot",
        tags: ["TypeScript", "Deno", "API Usage"],
    },
] satisfies Project[];
