const swiper = document.querySelector(".mySwiper");
const swiperPrev= document.querySelector(".swiper-slide");
const flechaIcon=document.getElementById("1");

swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth: 500,
    modifer: 1,
    slidesShadows: true,
    rotate: 0,
    stretch: 0,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    swiper.slidePrev();
  } else if (event.key === "ArrowRight") {
    swiper.slideNext();
  }
});

document.getElementById('1').addEventListener('click', function() {
  swiper.slidePrev();
});
