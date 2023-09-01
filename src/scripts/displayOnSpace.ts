/// <reference lib="dom" />
const spaceContainer = document.querySelector<HTMLElement>('.space')!;
const spaceOverlay = document.querySelector<HTMLDivElement>('.space__overlay')!;
const cardsConntainers = document.querySelectorAll<HTMLDivElement>('.card-container');
const exitBtn = document.querySelector<HTMLButtonElement>('.space__exit-btn')!;

let _pages: Record<string, any> = {};

// Some variables
let parentToBack: HTMLElement | null = null;

// Maybe this is not the best practise
fetch("/content.json").then((response) => response.json()).then((data) => {
    _pages = data;
});

cardsConntainers.forEach((cardContainer) => {
    cardContainer.addEventListener('click', () => {
        cardContainer.classList.add('card-container--active');
        const card = cardContainer.querySelector('.card') as HTMLElement;
        const cardTop = card.offsetTop + 4 + "px";
        const cardLeft = -card.offsetWidth - 20 + "px";
        card.classList.add("card--in-space");
        card.style.top = cardTop;
        card.style.left = cardLeft;

        spaceContainer.appendChild(card);
        parentToBack = cardContainer;
    });
});

exitBtn.addEventListener('click', exitElementFromSpace);

function _enterElementToSpace() {

}

function exitElementFromSpace() {
    const card = spaceContainer.querySelector('.card') as HTMLElement;
    card.classList.remove("card--in-space");
    card.style.top = "";
    card.style.left = "";
    parentToBack?.appendChild(card);
    parentToBack?.classList.remove('card-container--active');
}