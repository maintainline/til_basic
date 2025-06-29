window.addEventListener("load", function () {
  // 데이터 작성
  const liveApiData = [
    {
      uid: 1,
      링크: "#",
      메인이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      방송: "방송예정",
      타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일(화)",
      시간: "19:00",
      서브이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      서브타이틀: "휘닉스 리조트 평창 <br/> 85% <b>123,670</b>원",
    },
    {
      uid: 2,
      링크: "#",
      메인이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617021040.png",
      방송: "방송예정",
      타이틀:
        "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주노선 특가",
      날짜: "06월 18일(수)",
      시간: "11:00",
      서브이미지: "",
      서브타이틀: "",
    },
    {
      uid: 3,
      링크: "#",
      메인이미지:
        "//common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081732.png",
      방송: "방송예정",
      타이틀:
        "[몬드리안 이태원&테이크호텔 서울광명&인제 스피디움] 도심 호캉스&강원 숲캉스 특집!",
      날짜: "06월 19일(목)",
      시간: "19:00",
      서브이미지: "",
      서브타이틀: "",
    },
    {
      uid: 4,
      링크: "#",
      메인이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      방송: "라이브 다시보기",
      타이틀:
        "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      날짜: "",
      시간: "",
      서브이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      서브타이틀: "[상품보기] 푸꾸옥 자유여행 <br/> 혜택 보러가기",
    },
    {
      uid: 5,
      링크: "#",
      메인이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      방송: "라이브 다시보기",
      타이틀:
        "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      서브이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      서브타이틀: "월요라이브 자세히보기!",
    },
    {
      uid: 6,
      링크: "#",
      메인이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      방송: "라이브 다시보기",
      타이틀: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가🎊",
      날짜: "",
      시간: "",
      서브이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250613/14/159/20250613020241.png",
      서브타이틀: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 7,
      링크: "#",
      메인이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      방송: "라이브 다시보기",
      타이틀:
        "[진에어] 선착순 쿠폰! 전 노선 위탁수하물 15KG 포함 라이브 특가💚",
      날짜: "",
      시간: "",
      서브이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      서브타이틀: "[쿠폰 기획전] 진에어 라이브 특가",
    },
    {
      uid: 8,
      링크: "#",
      메인이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250609/14/96/20250609151841.png",
      방송: "라이브 다시보기",
      타이틀: "[리솜리조트] 여름을 빛낼 가장 특별한 여정 힐링 특가",
      날짜: "",
      시간: "",
      서브이미지:
        "https://media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1739859931/domstay/fc0216b6fe6043c5.jpg",
      서브타이틀: "스플라스 리솜(덕산) <br/> 67%<b>125,280</b>원",
    },
  ];

  // html 태그 만들기 (복붙용)
  let html = ``;

  // 실제 데이터 갯수 만큼 slide html 만들기
  html = "";
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = `<div class="swiper-slide">
      <a href="${liveApiData[i].링크}" class="live_slide_item">
        <div class="live_image">
          <img
            src="${liveApiData[i].메인이미지}"
            alt="${liveApiData[i].타이틀}"
          />
        </div>
        <div class="live_info">
          <div class="live_state">
            <span class="live_wait">${liveApiData[i].방송}</span>
          </div>
          <p class="live_item_title">
            ${liveApiData[i].타이틀}
          </p>
          <div class="live_day">
            <div class="live_day_date">${liveApiData[i].날짜}</div>
            <div class="live_day_time">${liveApiData[i].시간}</div>
          </div>
        </div>`;

    if (liveApiData[i].서브이미지 !== "") {
      tag =
        tag +
        ` <div class="live_detale">
      <div class="live_detale_image">
        <img
          src="${liveApiData[i].서브이미지}"
          alt="${liveApiData[i].타이틀}"
        />
      </div>
      <p class="live_detale_title">${liveApiData[i].서브타이틀}</p>
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

  // html 장소 배치하기
  const livePos = document.querySelector(".sw_live .swiper-wrapper");
  livePos.innerHTML = html;

  // console.log(html);

  // swiper 만들기 실행
  new Swiper(".sw_live", {
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
});
