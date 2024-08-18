/**
 * Creates a product element based on the provided data.
 *
 * @param {object} product - The product object with the data to create the element.
 * @returns {HTMLElement} - The HTML element representing the product.
 */
function createProductElement({ id, name, description, quantity }) {
  const productElement = document.createElement("div");

  productElement.id = id;
  productElement.classList.add("product");

  productElement.innerHTML = `
    <div class="product__wrapper" >
      <span class="product__name">${name}</span>
      <span class="product__description">${description}</span>
    </div>
    <input type="number" value="${quantity}" class="product__quantity"/>
  `;

  return productElement;
}

export default createProductElement;
