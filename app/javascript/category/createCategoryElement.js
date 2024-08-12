import createProductElement from "../product/createProductElement";
import fetchProducts from "../product/fetchProducts";
import toggleCategory from "../actions/toggleCategory";

async function createCategoryElement(category) {
  const categoryElement = document.createElement("div");

  categoryElement.id = `category-${category}`;
  categoryElement.classList.add("category");
  categoryElement.innerHTML = `<div class="category__name">${category}</div>`;

  const productsRelatedToCategory = await fetchProducts(category);

  productsRelatedToCategory.forEach((product) => {
    const productElement = createProductElement(product);
    categoryElement.appendChild(productElement);
  });

  return categoryElement;
}

export default createCategoryElement;
