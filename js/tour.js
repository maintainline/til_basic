window.addEventListener("DOMContentLoaded", function () {
  // 1.데이터 부르기

  let oringinData;

  async function getData() {
    try {
      const res = await fetch("/apis/tour.json");
      const result = await res.json();
      oringinData = result;
      makeCategoryHtml();
      makeHtml();
    } catch (error) {
      console.log(error);
    }
  }
  // 카테고리 버튼 생성
  function makeCategoryHtml() {
    let cateHtml = "";
    for (let i = 0; i < oringinData.length; i++) {
      const obj = oringinData[i];
      const tag = `<li><button>${obj.카테고리}</button></li>`;
      cateHtml = cateHtml + tag;
    }
    const where = document.querySelector(".tour_button_list");
    where.innerHTML = cateHtml;
    makeButton();
  }

  // 2. 슬라이드 html 만들기
  let showIndex = 0;
  function makeHtml() {
    let html = "";
    const showData = oringinData[showIndex].데이터;
    for (let i = 0; i < showData.length; i++) {
      const obj = showData[i];

      const tag = `
              <div class="swiper-slide">
              <a href="#" class="tour_item">
                  <div class="tour_item_image">
                      <img
                      src="${obj.image}"
                      alt="${obj.alt}"
                      />
                  </div>
                  <div class="tour_item_info">
                      <p class="tour_city">${obj.city}</p>
                      <p class="tour_sale">${obj.sale}</p>
                      <p class="tour_item_title">${obj.title}</p>
                      <p class="tour_price"><b>${obj.price}</b>원~</p>
                  </div>
              </a>
          </div>`;
      html = html + tag;
    }
    // 실제 html 태그에 배치하기
    const where = document.querySelector(".sw_tour .swiper-wrapper");
    // 다시 새로운 내용을 채운다.
    where.innerHTML = html;
    makeSlide();
  }

  // 3. 슬라이드 만들기
  let swTour;
  function makeSlide() {
    if (swTour) {
      // 슬라이드가 이미 존재한다면 지운다.
      swTour.destroy();
    }
    swTour = new Swiper(".sw_tour", {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 10,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".tour_slide_next",
        prevEl: ".tour_slide_prev",
      },

      // 반응형
      breakpoints: {
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 26,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 26,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
      },
    });
  }

  // 4. 버튼 포커스 만들기

  function makeButton() {
    const btlist = document.querySelectorAll(".tour_button_list li button");
    btlist[showIndex].classList.add("tour_focus");
    btlist.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 모든 버튼에서 tour_focus 클래스 제거
        removeFocus();
        showIndex = index;
        // 클릭된 버튼은 tour_focus 클래스 추가
        item.classList.add("tour_focus");
        makeHtml();
      });
    });
  }
  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    const btlist = document.querySelectorAll(".tour_button_list li button")
    btlist.forEach(function (item) {
      item.classList.remove("tour_focus");
    });
  }

  // makeButton();
  getData();
});
