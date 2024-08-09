export default function createProductElement({
  id,
  name,
  description,
  quantity,
}) {
  const productElement = document.createElement("div");

  productElement.id = `product-${id}`;
  productElement.className = "product";

  productElement.innerHTML = `
    <div class="wrapper >
      <span class="product__name">${name}</span>
      <span class="product__description">${description}</span>
    </div>
    <input type="number" value="${quantity}" class="product__quantity"/>
  `;

  return productElement;
}
