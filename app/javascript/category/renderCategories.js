import createCategoryElement from "./createCategoryElement";
import * as fetchCategories from "./fetchCategories";

/**
 * Render categories to the DOM.
 * 
 * This function fetches categories from the server and, for each category, 
 * creates a category element wiht its respective products
 * and appends it to the main element.
 * 
 * @returns {Promise<void>}
 */

async function renderCategories() {
  try { 
    const mainElement = document.querySelector("main");
    const categories = await fetchCategories.GetAll();

    for (const category of categories) {
      const categoryElement = await createCategoryElement(category);
      mainElement.appendChild(categoryElement);
    }
  } catch (error) {
    console.error("Error rendering categories:", error);
  }
}

export default renderCategories;