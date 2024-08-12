async function fetchProducts(category) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();

    const newData = data.map((product) => {
      product.quantity = Math.floor(Math.random() * 100);
      product.name = product.title;
      product.description = product.description.substring(0, 100) + "...";

      return product
    })

    return newData;
  } catch (error) {
    console.error("error fetching products on category:", error);
    return [];
  }
}

export default fetchProducts;
