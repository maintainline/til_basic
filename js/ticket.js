window.addEventListener("load", function () {
  // swiper 만들기 실행
  new Swiper(".ticket_slide", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,

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
        slidesPerView: 4,
        spaceBetween: 20,
        
      },
    },
  });
});
