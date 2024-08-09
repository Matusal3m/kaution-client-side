(() => {
  // app/javascript/Product.js
  function createProductElement({
    id,
    name,
    description,
    quantity
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

  // app/javascript/fetchProducts.js
  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const newData = data.map((product) => {
        product.quantity = Math.floor(Math.random() * 100);
        product.name = product.title;
        product.description = product.description.substring(0, 100) + "...";
        delete product.title;
        delete product.price;
        return product;
      });
      return newData;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  var fetchProducts_default = fetchProducts;

  // app/javascript/index.js
  async function renderProducts() {
    try {
      const mainElement = document.querySelector("main");
      const products = await fetchProducts_default();
      products.forEach((product) => {
        const productElement = createProductElement(product);
        mainElement.appendChild(productElement);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  renderProducts();
})();
