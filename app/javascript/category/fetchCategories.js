// Methods for fetching categories.
// GetAll, GetByUserId, Create, Delete, Update

const host = "http://localhost:3000";

/**
 * 
 * @returns {array}
 */

async function GetAll() {
  try {
    const response = await fetch(`${host}/user/all/category`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching categories:", error);
    return [];
  }
}

async function GetByUserId(userId) {
  try {
    const response = await fetch(`${host}/user/${userId}/category`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching a category:", error);
  }
}

async function Create({ name, description }, userId) {
  try {
    const response = await fetch(`${host}/user/${userId}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error creating category:", error);
  }
}

async function Delete(categoryId) {
  try {
    const response = await fetch(`${host}/user/category/${categoryId}`, {
      method: "DELETE",
    });
    return response.ok;
  } catch (error) {
    console.error("Error deleting category:", error);
  }
}

async function Update({ categoryId, name, description }) {
  try {
    const response = await fetch(`${host}/user/category/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error updating category:", error);
  }
}

export { GetAll, Create, Delete, Update, GetByUserId };
