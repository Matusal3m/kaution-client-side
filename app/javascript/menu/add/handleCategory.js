import { Create } from "../../category/fetchCategories";

function handleCategoryForm(form, formContainer) {
  formContainer.innerHTML = `
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Name" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descrição</label>
    <input type="text" id="description" name="description" placeholder="Description" required />
  </div>
`;

  const name = form.querySelector("#name");
  const description = form.querySelector("#description");
  const submitButton = form.querySelector("#form-submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = name.value;
    const descriptionValue = description.value;

    if (!nameValue || !descriptionValue) {
      alert("Please fill in all fields");
      return;
    }

    const category = {
      name: nameValue,
      quantity: quantityValue,
    };

    Create(category).then((response) => {
      if (response) {
        window.location.reload();
      }
    });
  });
}

export default handleCategoryForm;
