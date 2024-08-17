/**
 *
 * toggles the visibility of the category and its products when the category name is clicked.
 *
 * @param {object} category - The category object to toggle the childen elements,
 * when its category name is clicked.
 *
 * @param {Event} event - The event that triggered the toggle.
 * @returns {void} - No return value.
 */

function toggleCategory(category, event) {
  const isName = event.target.className == "category__name";
  if (!isName) return;

  category.classList.toggle("category--toggle");

  const products = Array.from(category.children);

  products.forEach((product) => {
    /* 
      This check is to prevent the category name from being toggled, 
      because what's happening is that
      all the elements inside the category are being toggled.
    */

    if (!product.classList.contains("category__name")) {
      product.classList.toggle("product--toggle");
    }
  });
}

export default toggleCategory;
