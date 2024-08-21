/**
 * Filters products based on a search string and toggles their visibility.
 *
 * @param {string} search - The search string to filter products by.
 * @returns {void}
 */
function filterProducts(search) {
  const products = Array.from(document.querySelectorAll(".product"));

  products.forEach((product) => {
    const name = product.querySelector(".product__name").textContent;
    const isVisible = name.includes(search) || search === "";

    product.classList.toggle("product--desactive", !isVisible);
  });
}

export default filterProducts;