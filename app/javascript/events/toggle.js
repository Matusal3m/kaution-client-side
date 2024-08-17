import toggleCategory from "../actions/toggleCategory";

/**
 * Toggles the visibility of the category and its products when the category name is clicked.
 * 
 * The event is added to all the categories.
 */

function toggle() {
  const categories = Array.from(
    document.querySelectorAll(".category")
  );

  categories.forEach((category) => {
    category.addEventListener("click", (e) => toggleCategory(category, e));
  });
}

export default toggle;
