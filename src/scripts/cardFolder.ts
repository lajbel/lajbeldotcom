/// <reference lib="dom" />

const cardFolders = document.querySelectorAll('.card-folder');

function changeFolderCardsState(cardFolder: HTMLDivElement, state?: boolean) {
    const cardsContainer = cardFolder.querySelector(".card-folder__cards-container");
    const cards = cardsContainer?.querySelectorAll(".card");

    cards?.forEach((card) => {
        if (card.classList.contains('card--in-space')) return;
        card.classList.toggle('card--active', state);
    });
}

function onCardFolderClick(cardFolder: HTMLDivElement) {
    cardFolder.classList.toggle('card-folder--active');
    changeFolderCardsState(cardFolder, cardFolder.classList.contains('card-folder--active'));
}

cardFolders.forEach((cardFolder) => {
    changeFolderCardsState(cardFolder as HTMLDivElement, cardFolder.classList.contains('card-folder--active'));
    const folderCover = cardFolder.querySelector(".card-folder__cover");

    folderCover?.addEventListener('click', () => {
        onCardFolderClick(cardFolder as HTMLDivElement);
    });
});