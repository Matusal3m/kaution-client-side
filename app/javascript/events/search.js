import filterProducts from "../actions/filterProducts";

/**
 * Search products when the user types in the search bar.
 */

function searchProducts() {
  const searchInput = document.querySelector("#search__input");

  searchInput.addEventListener("input", (e) => {
    filterProducts(e.target.value);
  });
}

export default searchProducts;
