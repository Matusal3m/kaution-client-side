import createProductElement from "./product/createProductElement";
import fetchProducts from "./product/fetchProducts";

async function renderProducts() {
  try {
    const mainElement = document.querySelector("main");
    const products = await fetchProducts();

    products.forEach((product) => {
      const productElement = createProductElement(product);
      mainElement.appendChild(productElement);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

renderProducts();