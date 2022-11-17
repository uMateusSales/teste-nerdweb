import siteScroll from "./scroll.js";

siteScroll();

const menuMobile = document.querySelector("#menuMobile");
const mobileUl = document.querySelector("#mobileUl");
const footMobile = document.querySelector("#footMobile");
const footUl = document.querySelector("#footUl");
const mobileSite = document.querySelector("#mobileSite");
const btnSite = document.querySelector("#btnSite");

function handleMenu(event) {
  event.preventDefault();
  if (mobileUl.classList.contains("activeMenu")) {
    mobileUl.classList.remove("activeMenu");
  } else {
    mobileUl.classList.add("activeMenu");
  }
}
function handleFoot(event) {
  event.preventDefault();
  if (footUl.classList.contains("activeMenu")) {
    footUl.classList.remove("activeMenu");
  } else {
    footUl.classList.add("activeMenu");
  }
}
function handleSite(event) {
  event.preventDefault();
  if (mobileSite.classList.contains("activeMenu")) {
    mobileSite.classList.remove("activeMenu");
  } else {
    mobileSite.classList.add("activeMenu");
  }
}
btnSite.addEventListener("click", handleSite);
footMobile.addEventListener("click", handleFoot);

menuMobile.addEventListener("click", handleMenu);

//- API do SWIPERJS -//

// SLIDE DIV PRODUTOS //
new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 30,
  hide: true,

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 6,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
//SLIDE DIV SERVIÇOS //
new Swiper(".swiper2", {
  slidesPerView: 1,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 3,
    },
  },
  hide: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
//SLIDE TITULO //
new Swiper(".swiper3", {
  slidesPerView: 1,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 2,
    },
    1310: {
      slidesPerView: 2,
    },
    1550: {
      slidesPerView: 2,
    },
    1880: {
      slidesPerView: 3,
    },
  },
  hide: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
