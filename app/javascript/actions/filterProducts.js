function filterProducts(filter) {
  const productElements = document.getElementsByClassName("product");
  const filteredProducts = Array.from(productElements).filter((product) => {
    const productName = product
      .querySelector(".product__name")
      .textContent.toLowerCase();

    const isMatch = productName.includes(filter.toLowerCase());

    product.classList.add(
      isMatch ? "product--isMatched" : "product--isNotMatched"
    );

    return isMatch; 
  });

  return filteredProducts;
}

export default filterProducts;
