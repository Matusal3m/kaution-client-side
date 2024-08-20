import showProductModal from "../modal/showProductModal.js";

function startPress(event) {
  const product = event.target.closest(".product");

  const timer = setTimeout(() => {
    showProductModal(product);
  }, 400);

  event.target.dataset.pressTimer = timer;
}

function stopPress(event) {
  const timer = event.target.dataset.pressTimer;
  clearTimeout(timer);
}

function pressEvent(product) {
  product.addEventListener("mousedown", startPress);
  product.addEventListener("mouseup", stopPress);
  product.addEventListener("mouseleave", stopPress);

  product.addEventListener("touchstart", startPress);
  product.addEventListener("touchend", stopPress);
  product.addEventListener("touchmove", stopPress);
  product.addEventListener("touchcancel", stopPress);
}

export default pressEvent;
