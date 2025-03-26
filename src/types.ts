import type { tagData } from "./config";
import type { Locale, localedT } from "./i18n";

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

// Utility types
export type PropsWithT<T> = {
    t: ReturnType<typeof localedT>;
    lang: Locale;
} & T;

export type ValueOf<T> = T[keyof T];
