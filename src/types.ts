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
