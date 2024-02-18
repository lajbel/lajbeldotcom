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
	}
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
		link: "https://www.lajbel.com/mandarina",
		image: mandarinaBanner,
		kind: "Library",
		tags: ["Kaboom.js", "Visual Novel", "Game Engine"],
		featured: true,
	},
	{
		title: "Kaboom.js",
		description: `A games library that I contribute to. 
        I heard about it in 2021, and I started contributing with the website,
        new demos, plugins, and documentation. Also I've worked in Replit for
        the development of the version 3000.`,
		link: "https://kaboomjs.com",
		image: kaboomjsBanner,
		kind: "Library",
		tags: ["Kaboom.js", "Game Engine", "React", "TypeScript"],
		featured: true,
	},
	{
		title: "Eggou",
		description: `A bullet hell game made in Kaboom.js. It's a
        project I made for a game jam.`,
		link: "https://lajbel.itch.io/eggou",
		image: eggouBanner,
		kind: "Game",
		tags: ["Kaboom.js", "Game Jam", "Bullet Hell"],
	},
	{
		title: "Newgrounds.js",
		description: `A library for interact with the Newgrounds API, made 
        in TypeScript.`,
		link: "https://www.lajbel.com/newgrounds.js",
		image: newgroundsjsBanner,
		kind: "Library",
		tags: ["API", "TypeScript"],
	},
	{
		title: "MarkBot",
		description: `A Chatbot application for Discord, made for bring help
        and support with Kaboom.js.`,
		link: "https://github.com/lajbel/markbot",
		image: markbotBanner,
		kind: "Chat Bot",
		tags: ["Discord", "Chat Bot", "Kaboom.js"],
	},
] satisfies Project[];
