/**
 * Fetches all the categories from the server.
 * @returns {array} - An array with the categories objects.
 */

async function fetchCategories() {
  try {
    const response = await fetch(
      "http://localhost:3000/user/all/category"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching categories:", error);
    return [];
  }
}

export default fetchCategories;
