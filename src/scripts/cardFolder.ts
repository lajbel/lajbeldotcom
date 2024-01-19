/// <reference lib="dom" />

const cardFolders = document.querySelectorAll<HTMLDivElement>('.card-folder');

function toggleFolderCardsActive(cardFolder: HTMLDivElement, toggle: boolean) {
    const cardsContainer = cardFolder.querySelector<HTMLDivElement>(".card-folder__cards-container");
    const cards = cardsContainer?.querySelectorAll<HTMLDivElement>(".card");

    cards?.forEach((card) => {
        card.classList.toggle('card--active', toggle);
    });
}

function onCardFolderClick(cardFolder: HTMLDivElement) {
    cardFolder.classList.toggle('card-folder--active');
    toggleFolderCardsActive(cardFolder, cardFolder.classList.contains("card-folder--active"));
}

cardFolders.forEach((cardFolder) => {
    toggleFolderCardsActive(cardFolder, cardFolder.classList.contains('card-folder--active'));
    const folderCover = cardFolder.querySelector(".card-folder__cover");

    folderCover?.addEventListener('click', () => {
        onCardFolderClick(cardFolder);
    });
});
