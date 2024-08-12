function toggleCategory(categoryName = document.querySelector(".category")) {
  (categoryName.textContent);
  const products = Array.from(categoryName.parentElement.children);

  products.forEach((product) => {
    if (!product.classList.contains("category__name")) {
      product.classList.toggle("product--desactive");
    }
  });
}

export default toggleCategory;
