/// <reference lib="dom" />
import { config } from "./config.ts";
import { updatePostWCard } from "./post.ts";

const cardFolders = document.querySelectorAll('.card-folder');
const cards = document.querySelectorAll('.card');
const enButton = document.querySelector(".space__en-btn");
const esButton = document.querySelector(".space__es-btn");
const cardFolderNames = {
    "es": {
        "home": "Inicio",
        "projects": "Proyectos",
        "games": "Videojuegos",
    },
    "en": {
        "home": "Home",
        "projects": "Code Projects",
        "games": "Games",
    }
}

export function swapLanguage(language: "es" | "en") {
    config.lang = language;
    const lang = language;

    cardFolders.forEach((cardFolder) => {
        const folderTitle = cardFolder?.querySelector(".card-folder__title");
        if (folderTitle) {
            folderTitle.innerHTML = cardFolderNames[lang][cardFolder.id as "home" | "projects" | "games"];
        }
    });

    cards.forEach((card) => {
        const cardName = card?.querySelector(".card__name");
        const cardDescription = card?.querySelector(".card__description");

        if (cardName && cardDescription) {
            const dataContent = config.jsonContent[card.id];
            const dataLangContent = dataContent[lang];
            const title = dataLangContent?.title?.toString() || dataContent.title?.toString() || "";
            const description = dataLangContent?.description?.toString() || dataContent.description?.toString() || "";

            cardName.innerHTML = title;
            cardDescription.innerHTML = description;
        }
    });

    updatePostWCard(config.currentCard);

}

enButton?.addEventListener('click', () => {
    swapLanguage("en");
});

esButton?.addEventListener('click', () => {
    swapLanguage("es");
});