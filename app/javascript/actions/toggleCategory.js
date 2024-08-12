function toggleCategory(category = document.querySelector(".category"), event) {
  const isName = event.target.className == "category__name";
  if (!isName) return;

  category.classList.toggle("category--toggle");

  const products = Array.from(category.children);

  products.forEach((product) => {
    if (!product.classList.contains("category__name")) {
      product.classList.toggle("product--desactive");
    }
  });
}

export default toggleCategory;
