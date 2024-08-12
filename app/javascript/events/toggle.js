import toggleCategory from "../actions/toggleCategory";

function toggle() {
  const categories = Array.from(
    document.querySelectorAll(".category")
  );

  categories.forEach((category) => {
    category.addEventListener("click", (e) => toggleCategory(category, e));
  });
}

export default toggle;
