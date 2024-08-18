import showProductModal from "../modal/showProductModal.js";

let pressTimer;

function pressEvent() {
  const products = Array.from(document.querySelectorAll(".product"));
  products.forEach((product) => {
    product.addEventListener("mousedown", (e) => {
      startPress(e.target.closest(".product"));
    });
    product.addEventListener("mouseup", stopPress);
    product.addEventListener("mouseleave", stopPress);

    product.addEventListener("touchstart", (e) => {
      startPress(e.target.closest(".product"));
    });

    product.addEventListener("touchend", stopPress);
    product.addEventListener("touchmove", stopPress);
    product.addEventListener("touchcancel", stopPress);
  });
}

function startPress(product) {
  pressTimer = setTimeout(() => {
    showProductModal(product);
  }, 400);
}

function stopPress() {
  clearTimeout(pressTimer);
}

export default pressEvent;
