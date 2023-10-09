/// <reference lib="dom" />
import { config } from "./config.ts";

let jsonContent: Record<string, any>;

// Fetch content.json
fetch("/content.json").then((response) => response.json()).then(
    (data) => {
        jsonContent = data;
        config.jsonContent = jsonContent;
    }
);

// Functions    
export function updatePostWCard(cardId: string) {
    const dataContent = jsonContent[cardId];
    if (!dataContent) return;

    const dataLangContent = dataContent[config.lang];
    const content = dataLangContent?.content?.toString() || dataContent.content?.toString() || "";
    const title = dataLangContent?.title?.toString() || dataContent.title?.toString() || "";
    const image = dataContent.image?.toString() || "";

    updatePostContent(
        content,
        cardId,
        title,
        image,
    )
}

export function updatePostContent(content: string, id: string, title: string, image: string) {
    const spacePostContent = document.querySelector('.space__post-content');
    const spacePostTitle = document.querySelector<HTMLHeadingElement>('.space__post-title');
    const spacePostImage = document.querySelector<HTMLImageElement>('.space__post-image');

    if (spacePostContent && spacePostImage && spacePostTitle) {
        spacePostContent.innerHTML = content;
        spacePostContent.id = id;
        spacePostTitle.innerHTML = title;
        spacePostImage.src = image;
    }
}
