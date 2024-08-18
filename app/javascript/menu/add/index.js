import createAddForm from "./createAddForm";

/**
 * 
 * @param {HTMLDivElement} container 
 * @returns 
 */

function addForm(container) {
  const form = createAddForm();
  container.appendChild(form);

  form.querySelector(".add__form__close").addEventListener("click", () => {
    container.remove();
  });

  return form;
}

export default addForm;