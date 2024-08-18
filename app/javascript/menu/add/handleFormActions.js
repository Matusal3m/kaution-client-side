import handleCategoryForm from "./handleCategory";
import handleProductForm from "./handleProductForm";

function handleFormActions(form) {
  const radios = Array.from(form.querySelectorAll("input[type='radio']"));

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const formContainer = document.querySelector("#add__form__container");
      const radioId = e.target.id;

      if (radioId !== "category") {
        handleProductForm(form, formContainer);
      } else {
        handleCategoryForm(form, formContainer);
      }
    });
  });
}

export default handleFormActions;
