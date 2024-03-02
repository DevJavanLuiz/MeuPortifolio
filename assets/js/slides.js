var swiper = new Swiper(".slide-content", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -800],
    },
    next: {
      translate: ["100%", 0, 370],
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
