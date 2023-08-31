/// <reference lib="dom" />
const spaceContainer = document.querySelector('.space')!;
const cards = document.querySelectorAll('.card');
let pages: any = {};

// Maybe this is not the best practise
fetch("/content.json").then((response) => response.json()).then((data) => {
    pages = data;
});

cards.forEach((card) => {
    card.addEventListener('click', () => {
        spaceContainer.innerHTML = pages?.[card.id].content;
    });
});