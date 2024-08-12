import fetchCategories from "./fetchCategories";
import createCategoryElement from "./createCategoryElement";

async function renderCategories() {
  try {
    const mainElement = document.querySelector("main");
    const categories = await fetchCategories();

    for (const category of categories) {
      const categoryElement = await createCategoryElement(category);
      mainElement.appendChild(categoryElement);
    }
  } catch (error) {
    console.error("Error rendering categories:", error);
  }
}

export default renderCategories;