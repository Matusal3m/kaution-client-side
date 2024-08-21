/**
 *
 * toggles the visibility of the category and its products when the category name is clicked.
 *
 * @param {HTMLDivElement} category - The category object to toggle the childen elements,
 * when its category name is clicked.
 *
 */

function toggleCategoryEvent(category) {
  category.addEventListener("click", (e) => {
    const isCategoryName = e.target.classList.contains("category__name");

    if (!isCategoryName) return;

    category.classList.toggle("category--toggle");
    category
      .querySelectorAll(":not(.category__name)")
      .forEach((el) => el.classList.toggle("product--toggle"));
  });
}

export default toggleCategoryEvent;
