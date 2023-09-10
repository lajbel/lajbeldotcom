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
let activeCardFolder: HTMLDivElement | null = null;

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.remove("card--active");
        card.classList.add("card--in-space");

        if (activeCard) {
            activeCard.classList.remove("card--in-space");
            activeCard.classList.add("card--active");
        }

        activeCard = card as HTMLDivElement;
        activeCardFolder = card.parentElement?.parentElement as HTMLDivElement;

        if (spacePost) {
            spacePost.innerHTML = jsonContent[card.id]?.content?.toString() || "";
            spacePost.id = card.id;
        }

        spacePost?.classList.add("space__post--active");
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