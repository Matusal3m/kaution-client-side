/**
 * Fetches products for a given category
 *
 * @param {object} category - The category object with the data to fetch the related products.
 * @returns {array} - An array with the products objects related to the given category.
 */

async function fetchProducts(category) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/category/${category.id}/product`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching products on category:", error);
    return [];
  }
}

export default fetchProducts;
