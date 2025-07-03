window.addEventListener("DOMContentLoaded", function () {
  // 1. 데이터 불러오기
  async function getData() {
    try {
      const res = await fetch("/apis/live.json");
      const result = await res.json();
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 만들기
  function makeHtml(data) {
    let html = "";

    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let tag = `
      <div class="swiper-slide">
      <a href="${obj.링크}" class="live_slide_item">
        <div class="live_image">
          <img
            src="${obj.메인이미지}"
            alt="${obj.타이틀}"
          />
        </div>
        <div class="live_info">
          <div class="live_state">
            <span class="live_wait">${obj.방송}</span>
          </div>
          <p class="live_item_title">
            ${obj.타이틀}
          </p>
          <div class="live_day">
            <div class="live_day_date">${obj.날짜}</div>
            <div class="live_day_time">${obj.시간}</div>
          </div>
        </div>`;

      if (obj.서브이미지 !== "") {
        tag =
          tag +
          ` <div class="live_detale">
      <div class="live_detale_image">
        <img
          src="${obj.서브이미지}"
          alt="${obj.타이틀}"
        />
      </div>
      <p class="live_detale_title">${obj.서브타이틀}</p>
    </div>`;
      }

      tag =
        tag +
        `</a>
    </div>
    </div>
     `;
      html = html + tag;
    }
    const liveItem = document.querySelector(".sw_live .swiper-wrapper");
    liveItem.innerHTML = html;

    makeSlide();
  }
  // 3. 슬라이드 만들기
  function makeSlide() {
    const swiper = new Swiper(".sw_live", {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,

      navigation: {
        nextEl: ".live_slide_next",
        prevEl: ".live_slide_prev",
      },

      breakpoints: {
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }
  // 실행하기
  getData();
});
