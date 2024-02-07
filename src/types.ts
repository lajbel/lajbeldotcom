type ProjectKind = "Game" | "Library" | "Tool" | "Website" | "Chat Bot";

export type Project = {
	title: string;
	description: string;
	link: string;
	image: ImageMetadata;
	kind: ProjectKind;
	tags: string[];
	featured?: boolean;
};
