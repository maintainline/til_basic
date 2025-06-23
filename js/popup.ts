window.addEventListener("DOMContentLoaded", (): void => {
  const closeBt: Element | null = document.querySelector(".popup_close");
  const popup: HTMLDivElement | null = document.querySelector(".popup");

  closeBt!.addEventListener("click", (): void => {
    popup!.style.display = "none";
  });
});
