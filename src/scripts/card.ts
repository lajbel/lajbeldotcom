/// <reference lib="dom" />

const cards = document.querySelectorAll('.card');
const spacePost = document.querySelector('.space__post');
const exitBtn = document.querySelector('.space__exit-btn');
let jsonContent: Record<string, any>;

// Fetch content.json
fetch("/content.json").then((response) => response.json()).then(
    (data) => {
        jsonContent = data;
    }
);

let activeCard: HTMLDivElement | null = null;

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.remove("card--active");

        if (activeCard) {
            activeCard.classList.add("card--active");
        }

        activeCard = card as HTMLDivElement;

        if (spacePost) {
            spacePost.innerHTML = jsonContent[card.id]?.content?.toString() || "";
        }

        spacePost?.classList.add("space__post--active");
    });
});

// Exit and return card
exitBtn?.addEventListener('click', () => {
    activeCard?.classList.add("card--active");
    activeCard = null;
    spacePost?.classList.remove("space__post--active");
});