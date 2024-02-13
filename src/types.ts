import type { Locale, localedT } from "./i18n";

export type ProjectKind = "Game" | "Library" | "Tool" | "Website" | "Chat Bot";
export type ProjectStack = "Node.js" | "Deno" | "Kaboom.js" | "Unity" | "JavaScript" | "TypeScript" | "Next.js" | "Express.js"

export type Project = {
	title: string;
	description: string;
	link: string;
	image: ImageMetadata;
	kind: ProjectKind;
	tags: string[];
	featured?: boolean;
};

// Utility types
export type PropsWithT<T> = {
	t: ReturnType<typeof localedT>;
	lang: Locale;
} & T;

export type ValueOf<T> = T[keyof T];
