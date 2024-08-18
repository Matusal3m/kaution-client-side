import createAddFormHtml from "./createAddFormHtml";
import handleFormActions from "./handleFormActions";

/**
 *
 * @param {HTMLDivElement} container
 * @returns
 */

function addForm(container) {
  const form = createAddFormHtml();
  container.appendChild(form);

  form.querySelector(".add__form__close").addEventListener("click", () => {
    container.remove();
  });

  handleFormActions(form);

  return form;
}

export default addForm;
