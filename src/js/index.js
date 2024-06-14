//burger menu
const burgMenu = document.querySelector(".burg-menu");

burgMenu.addEventListener("click", () => {
  document.body.classList.toggle("menu-active");
});

// glide
document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide-cards", {
    type: "carousel",
    startAt: 0,
    // autoplay: 5000,
    // hoverpause: true,
    gap: 30,
    perView: 3,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      990: {
        perView: 1,
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide-reviews", {
    type: "carousel",
    startAt: 0,
    // autoplay: 5000,
    // hoverpause: true,
    gap: 30,
    perView: 4,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      990: {
        perView: 1,
      },
    },
  }).mount();
});
