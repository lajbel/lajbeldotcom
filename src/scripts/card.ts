/// <reference lib="dom" />
import { config } from "./config.ts";
import { updatePost } from "./post.ts";

const cards = document.querySelectorAll('.card');
const post = document.querySelector('.post');
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

    updatePost(card.id);
    post?.classList.add("post--active");
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        handleCardClick(card as HTMLDivElement);
    });
});

// Exit and return card
exitBtn?.addEventListener('click', () => {
    activeCard?.classList.remove("card--in-space");
    post?.classList.remove("post--active");

    if (post) {
        post.id = "";
    }

    if (activeCardFolder?.classList.contains('card-folder--active')) {
        activeCard?.classList.add("card--active");
    }

    activeCard = null;
});
