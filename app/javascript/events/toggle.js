import toggleCategory from "../actions/toggleCategory";

function toggle() {
  const categoriesName = Array.from(
    document.querySelectorAll(".category__name")
  );

  categoriesName.forEach((category) => {
    category.addEventListener("click", () => toggleCategory(category));
  });
}

export default toggle;
