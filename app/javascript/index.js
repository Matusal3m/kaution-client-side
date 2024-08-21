import * as events from "./events";
import * as fetchCategories from "./category/fetchCategories";
import createCategoryElement from "./category/createCategory";
import search from "./search";
import menu from "./menu";

/**
 * This is where the app is initialized.
 * All the are rendered and then the events are initialized when the DOM is ready.
 */

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const mainElement = document.querySelector("main");
    const categoriesWrapper = document.createElement("div");

    categoriesWrapper.classList.add("categories-wrapper");

    const categories = await fetchCategories.GetAll();

    const categoryElements = await Promise.all(
      categories.map(createCategoryElement)
    );

    categoriesWrapper.append(...categoryElements);
    mainElement.appendChild(categoriesWrapper);
  } catch (error) {
    console.error("Error rendering categories:", error);
  }

  search();
  menu();
});
