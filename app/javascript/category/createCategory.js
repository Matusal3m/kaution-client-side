import createProduct from "../product/createProduct";
import * as fetchProducts from "../product/fetchProducts";
import toggleCategoryEvent from "./toggleCategoryEvent";

/**
 * Create an HTML element that represents the category and its products.
 *
 * @param {object} category - The category object with the data to create the element.
 * @returns {HTMLElement} - The HTML element representing the category and its products.
 */

async function createCategory(category) {
  const categoryElement = document.createElement("div");

  categoryElement.id = category.id;
  categoryElement.classList.add("category");
  categoryElement.innerHTML = `<div class="category__name">${category.name}</div>`;

  // Add event listener to category element
  toggleCategoryEvent(categoryElement);

  const productsRelatedToCategory = await fetchProducts.GetByCategoryId(
    category.id
  );

  productsRelatedToCategory.forEach((product) => {
    const productElement = createProduct(product);
    categoryElement.appendChild(productElement);
  });

  return categoryElement;
}

export default createCategory;
