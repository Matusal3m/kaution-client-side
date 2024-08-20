import pressProductEvent from "./pressProductEvent"

/**
 * Creates a product element based on the provided data.
 *
 * @param {object} product - The product object with the data to create the element.
 * @returns {HTMLElement} - The HTML element representing the product.
 */
function createProduct({ id, name, description, quantity }) {
  const productElement = document.createElement("div");

  productElement.id = id;
  productElement.classList.add("product");

  productElement.innerHTML = `
    <div class="product__wrapper" >
      <span class="product__name">${name}</span>
      <span class="product__description">${description}</span>
    </div>
    <input type="tel" value="${quantity}" class="product__quantity"/>
  `;

  pressProductEvent(productElement);

  return productElement;
}

export default createProduct;
