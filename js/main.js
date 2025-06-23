// 단축키 ctrl+space = "DOMContentLoaded"
window.addEventListener("DOMContentLoaded", () => {
  // main
  const main = document.querySelector(".main");
  // 윈도우 스크롤 체크
  window.addEventListener("scroll", () => {
    const scY = this.window.scrollY;
    if (scY > 0) {
      main.classList.add("main_scroll");
    } else {
      main.classList.remove("main_scroll");
    }
  });
});
