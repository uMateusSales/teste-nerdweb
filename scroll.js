export default function siteScroll() {
  const divScroll = document.querySelectorAll(".js-scroll");
  const windowVisible = window.innerHeight * 0.7;
  function scrollAnime() {
    divScroll.forEach((div) => {
      const divTop = div.getBoundingClientRect();
      const visivel = divTop.top - windowVisible < 0;
      if (visivel) {
        div.classList.add("js-ativo");
      }
    });
  }
  window.addEventListener("scroll", scrollAnime);
}
siteScroll();
