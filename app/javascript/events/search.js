import filterProducts from "../actions/filterProducts";
import renderCategories from "../category/renderCategories";

function searchProducts() {
  const searchInput = document.querySelector("#search__input");

  searchInput.addEventListener("input", (e) => {
    filterProducts(e.target.value);
  });
}

export default searchProducts;
