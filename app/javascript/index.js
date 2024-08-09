import createProductElement from "./Product";
import fetchProducts from "./fetchProducts";

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