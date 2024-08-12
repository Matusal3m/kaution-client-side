function filterProducts(filter) {
  const productElements = document.getElementsByClassName("product");
  const filteredProducts = Array.from(productElements).filter((product) => {
    const productName = product
      .querySelector(".product__name")
      .textContent.toLowerCase();

    const isMatch = productName.includes(filter.toLowerCase());

    //TODO: add description filter
  });

  return filteredProducts;
}

export default filterProducts;
