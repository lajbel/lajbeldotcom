import "./cardFolder.ts";
import "./navButton.ts";

document.getElementById("post")?.focus();

// Get all cards
const cards = document.querySelectorAll<HTMLDivElement>(".card");

cards.forEach((card) => {
    const cardImage = card.querySelector<HTMLImageElement>(".card__image")?.src;
    const cardSummary = card.querySelector<HTMLDivElement>(".card__summary");
    cardSummary?.style.setProperty("--card-img", `url("${cardImage}")`);
});