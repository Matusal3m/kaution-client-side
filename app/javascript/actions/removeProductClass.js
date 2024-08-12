function removeProductClass(className) {
  const categories = Array.from(document.querySelectorAll(".category"));

  categories.forEach((category) => {
    const products = Array.from(category.children);
    
    products.forEach((product) => {
      if (!product.classList.contains("category__name")) {
        product.classList.remove(className);
      }
    });
  });
}

export default removeProductClass;
