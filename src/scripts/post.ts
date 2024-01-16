/// <reference lib="dom" />
import { config } from "./config.ts";

let jsonContent: Record<string, any>;

// Fetch content.json
fetch("/content.json").then((response) => response.json()).then(
    (data) => {
        jsonContent = data;
        config.jsonContent = jsonContent;
        const cards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>;

        // If URL has card id
        const url = new URL(window.location.href);
        const cardId = url.searchParams.get("card");

        if (cardId) {
            cards.forEach((card) => {
                if (card.id === cardId) {
                    card.click();
                }
            });
        }
    }
);

// Functions    
export function updatePost(cardId: string) {
    const dataContent = jsonContent[cardId];
    if (!dataContent) return;

    const dataLangContent = dataContent[config.lang];
    const content = dataLangContent?.content?.toString() || dataContent.content?.toString() || "";
    const title = dataLangContent?.title?.toString() || dataContent.title?.toString() || "";
    const image = dataContent.image?.toString() || "";
    const banner = dataContent.banner?.toString() || "";

    updatePostElements(
        content,
        cardId,
        title,
        image,
    )
}

export function updatePostElements(content: string, id: string, title: string, image: string) {
    const postContent = document.querySelector('.post__content');
    const postTitle = document.querySelector<HTMLHeadingElement>('.post__title');
    const postBanner = document.querySelector<HTMLImageElement>('.post__banner');

    if (postContent && postBanner && postTitle) {
        postContent.innerHTML = content;
        postContent.id = id;
        postTitle.innerHTML = title;
        postBanner.src = image;
    }
}

