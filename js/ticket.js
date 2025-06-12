window.addEventListener("load", function () {
  // swiper 만들기 실행
  new Swiper(".ticket_slide", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,

    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },

    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
