function categoryEvent(category) {

}

function startPress(category) {
  pressTimer = setTimeout(() => {
    showCategoryModal(category);
  }, 400);
}

function stopPress() {
  clearTimeout(pressTimer);
}
