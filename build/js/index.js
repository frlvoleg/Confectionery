//burger menu

const burgMenu = document.querySelector(".burg-menu");

burgMenu.addEventListener("click", () => {
  document.body.classList.toggle("menu-active");
});

// header scroll
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-shadow");
    } else {
      header.classList.remove("header-shadow");
    }
  });
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

//language

const chooseLang = document.querySelectorAll(".lang-option");

for (const v of chooseLang) {
  v.addEventListener("click", (event) => {
    document.querySelector(".lang-btn").innerHTML =
      event.target.getAttribute("data-lang");
  });
}
