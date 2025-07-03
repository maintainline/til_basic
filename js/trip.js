window.addEventListener("DOMContentLoaded", function () {
  // 1. 데이터 가져오기
  async function getData() {
    try {
      const res = await fetch("/apis/trip.json");
      const result = await res.json();
      // 2 번 진행
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 태그 만들기
  function makeHtml(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let tag = `
  <div class="swiper-slide">
    <a href="${obj.링크}" class="trip_slide_item">
      <div class="trip_image">
        <img
          src="${obj.이미지}"
          alt="${obj.alt}"
        />
      </div>
      <div class="trip_info">
        <div class="trip_icon">
          <img src="images/w_logo.svg" alt="trip" />
          ${obj.대상}
        </div>
        <p class="trip_item_title">
          ${obj.상품타이틀}
        </p>
        <p class="trip_schedule">
        `;

      for (let j = 0; j < obj.스케줄.length; j++) {
        tag = tag + `<span>${obj.스케줄[j]}</span>`;
      }

      tag =
        tag +
        `</p>


        <p class="trip_price">
          <b>${obj.상품가격}</b>
          원~
          <span class="m_line">${obj.정상가}</span>
        </p>
      </div>
    </a>
  </div>     
  `;
      html = html + tag;
    }

    const tripItem = document.querySelector(".sw_trip .swiper-wrapper");
    tripItem.innerHTML = html;
    // 3번 진행
    makeSlide();
  }

  // 3. 슬라이드 만들기
  function makeSlide() {
    const swiper = new Swiper(".sw_trip", {
      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".trip_slide_next",
        prevEl: ".trip_slide_prev",
      },
      breakpoints: {
        960: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
  // 실행하기.
  getData();
});
