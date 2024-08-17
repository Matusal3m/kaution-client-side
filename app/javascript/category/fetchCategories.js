async function fetchCategories() {
  try {
    const response = await fetch(
      "https://kaution-api.onrender.com/user/all/category"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("error fetching categories:", error);
    return [];
  }
}

export default fetchCategories;
