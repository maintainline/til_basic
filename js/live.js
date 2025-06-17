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
      타이틀: "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주노선 특가",
      날짜: "06월 18일(수)",
      시간: "11:00",
      서브이미지:
        "",
      서브타이틀: "",
    },
    {
      uid: 3,
      링크: "#",
      메인이미지:
        "//common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081732.png",
      방송: "방송예정",
      타이틀: "[몬드리안 이태원&테이크호텔 서울광명&인제 스피디움] 도심 호캉스&강원 숲캉스 특집!",
      날짜: "06월 19일(목)",
      시간: "19:00",
      서브이미지:
        "",
      서브타이틀: "",
    },
    {
      uid: 4,
      링크: "#",
      메인이미지:
        "",
      방송: "라이브 다시보기",
      타이틀: "[푸꾸옥 자유여행] 여름맞이 평창&제주 특가",
      날짜: "06월 17일(화)",
      시간: "19:00",
      서브이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      서브타이틀: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 5,
      링크: "#",
      메인이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      방송: "방송예정",
      타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일(화)",
      시간: "19:00",
      서브이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      서브타이틀: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 6,
      링크: "#",
      메인이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      방송: "방송예정",
      타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일(화)",
      시간: "19:00",
      서브이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      서브타이틀: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 7,
      링크: "#",
      메인이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      방송: "방송예정",
      타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일(화)",
      시간: "19:00",
      서브이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      서브타이틀: "휘닉스 리조트 평창 85% 123,670원",
    },
    {
      uid: 8,
      링크: "#",
      메인이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      방송: "방송예정",
      타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일(화)",
      시간: "19:00",
      서브이미지:
        "//media.interparkcdn.net/interpark-tour/image/upload/w_640,h_410,c_limit/v1740638604/domstay/d519fa2509854812.jpg",
      서브타이틀: "휘닉스 리조트 평창 85% 123,670원",
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
        </div>
        <div class="live_detale">
          <div class="live_detale_image">
            <img
              src="${liveApiData[i].서브이미지}"
              alt="${liveApiData[i].타이틀}"
            />
          </div>
          <p class="live_detale_title">
            ${liveApiData[i].서브타이틀}
          </p>
        </div>
      </a>
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
