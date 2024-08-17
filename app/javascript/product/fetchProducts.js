/**
 * Fetches products for a given category
 *
 * @param {object} category - The category object with the data to fetch the related products.
 * @returns {array} - An array with the products objects related to the given category.
 */

const host = "http://localhost:3000";

async function GetByCategoryId(category) {
  try {
    const response = await fetch(
      `${host}/user/category/${category.id}/product`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching products on category:", error);
    return [];
  }
}

async function Create({ name, description, quantity }, category) {
  try {
    const response = await fetch(
      `${host}/user/category/${category.id}/product`,
      {
        method: "POST",
        body: JSON.stringify({
          name,
          description,
          quantity,
          categoryId: category.id,
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Error creating product:", error);
    return [];
  }
}

async function Update({ id, name, description, quantity }, category) {
  try {
    const response = await fetch(
      `${host}/user/category/${category.id}/product/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name,
          description,
          quantity,
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

async function Delete(productId, category) {
  try {
    const response = await fetch(
      `${host}/user/category/${category.id}/product/${productId}`,
      {
        method: "DELETE",
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

export { GetByCategoryId, Create, Update, Delete };
