/// <reference lib="dom" />
import { config } from "./config.ts";
import { updatePostWCard } from "./post.ts";

const cards = document.querySelectorAll('.card');
const spacePost = document.querySelector('.space__post');
const exitBtn = document.querySelector('.space__exit-btn');

let activeCard: HTMLDivElement | null = null;
let activeCardFolder: HTMLDivElement | null = null;

function handleCardClick(card: HTMLDivElement) {
    card.classList.remove("card--active");
    card.classList.add("card--in-space");
    config.currentCard = card.id;

    if (activeCard) {
        activeCard.classList.remove("card--in-space");
        activeCard.classList.add("card--active");
    }

    activeCard = card as HTMLDivElement;
    activeCardFolder = card.parentElement?.parentElement as HTMLDivElement;

    updatePostWCard(card.id);
    spacePost?.classList.add("space__post--active");
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        handleCardClick(card as HTMLDivElement);
    });
});

// Exit and return card
exitBtn?.addEventListener('click', () => {
    activeCard?.classList.remove("card--in-space");
    spacePost?.classList.remove("space__post--active");

    if (spacePost) {
        spacePost.id = "";
    }

    if (activeCardFolder?.classList.contains('card-folder--active')) {
        activeCard?.classList.add("card--active");
    }

    activeCard = null;
});