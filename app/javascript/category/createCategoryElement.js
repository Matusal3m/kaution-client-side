import createProductElement from "../product/createProduct";
import * as fetchProducts from "../product/fetchProducts";

/**
  Create an HTML element that represents the category and its products.
  
  @param {object} category - The category object with the data to create the element.
  @returns {HTMLElement} - The HTML element representing the category and its products.
*/

async function createCategoryElement(category) {
  const categoryElement = document.createElement("div");

  categoryElement.id = category.id;
  categoryElement.classList.add("category");
  categoryElement.innerHTML = `<div class="category__name">${category.name}</div>`;

  const productsRelatedToCategory = await fetchProducts.GetByCategoryId(category.id);

  productsRelatedToCategory.forEach((product) => {
    const productElement = createProductElement(product);
    categoryElement.appendChild(productElement);
  });

  return categoryElement;
}

export default createCategoryElement;
