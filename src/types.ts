import type { tagData } from "./config";

export type ProjectKind =
    | "Videogame"
    | "Library"
    | "Developer Tool"
    | "Website"
    | "Chat Bot";

export type ProjectTags = keyof typeof tagData;

export type Project = {
    title: string;
    description: string;
    link: string;
    repo: string;
    image: ImageMetadata;
    kind: ProjectKind;
    tags: ProjectTags[];
    featured?: boolean;
};
