function filterProducts(filter) {
  const products = Array.from(document.querySelectorAll(".product"));

  products.forEach((product) => {
    if (product.querySelector(".product__name").textContent.includes(filter) || filter == "") {
      product.classList.remove("product--desactive");
    } else {
      product.classList.add("product--desactive");
    }
  })

}

export default filterProducts;
