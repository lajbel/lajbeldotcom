import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

new Swiper(".swiper", { // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
