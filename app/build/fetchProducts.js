(() => {
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
})();
