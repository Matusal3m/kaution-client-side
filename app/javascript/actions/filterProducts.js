/**
 * Filters based on a filter string and enables or disables products visibility.
 * This event is triggered when the user types in the search bar (input event).
 *
 * @param {string} filter - The filter string to search for.
 * @returns {void} - No return value.
 */


function filterProducts(filter) {
  const products = Array.from(document.querySelectorAll(".product"));

  products.forEach((product) => {
    if (product.querySelector(".product__name").textContent.includes(filter) || filter == "") {
      product.classList.remove("product--desactive");
    } else {
      product.classList.add("product--desactive");
    }
  })

}

export default filterProducts;
