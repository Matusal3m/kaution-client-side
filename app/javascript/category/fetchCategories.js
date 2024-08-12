async function fetchCategories() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching categories:", error);
    return [];
  }
}

export default fetchCategories;