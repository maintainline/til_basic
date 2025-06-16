window.addEventListener("load", function () {
  // 데이터
  const ticketApiData = [
    {
      링크: "#",
      이미지: "//ticketimage.interpark.com/Play/image/large/25/25006845_p.gif",
      alt: "포스터",
      순서: "1",
      제목: "뮤지컬 <등등곡>",
      장소: "예스24스테이지 1관",
      날짜: "2025.06.24~2025.09.14",
      단독판매: "",
      좌석우위: "",
    },
  ];

  //html 태그 만들고 배치하기
  const ticketPos = this.document.querySelector(".sw_ticket .swiper-wrapper");
  let html = ``;

  // 실제 데이터 갯수 만큼 swiper-slide 태그 만들어 배치하기

  html = "";
  for (let i = 0; 1 < ticketApiData.length; i++) {
    let tag = (
      <div class="swiper-slide">
        <a href="${ticketApiData[i].링크}" class="ticket_slide_item">
          <div class="ticket_image">
            <img
              src="${ticketApiData[i].이미지}"
              alt="${ticketApiData[i].alt}"
            />
            <div class="ticket_rank">${ticketApiData[i].순서}</div>
          </div>
          <div class="ticket_info">
            <p class="ticket_item_title">${ticketApiData[i].제목}</p>
            <p class="ticket_place">${ticketApiData[i].장소}</p>
            <p class="ticket_day">${ticketApiData[i].날짜}</p>
            <div class="ticket_option">
              <span class="ticket_red">${ticketApiData[i].단독판매}</span>
              <span class="ticket_blue">${ticketApiData[i].좌석우위}</span>
            </div>
          </div>
        </a>
      </div>
    );

    html = html + tag;
  }

  console.log("만들어진 태그:", html);
  //ticketPos.innerHTML = html;

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
