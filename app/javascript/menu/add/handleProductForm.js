import { Create } from "../../product/fetchProducts";
import { GetAll } from "../../category/fetchCategories";
import renderCategories from "../../category/renderCategories";

async function handleProductForm(form, formContainer) {
  const categories = await GetAll();
  let categoriesOptions = "";

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;

    categoriesOptions += option.outerHTML;
  });

  const formHtml = `
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Nome" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descrição</label>
    <input type="text" id="description" name="description" placeholder="Descrição" required />
  </div>
  
  <div class="add__form__input">
    <label for="quantity">Quantidade</label>
    <input type="tel" id="quantity" name="quantity" placeholder="Quantidade" required />
  </div

  <div class="add__form__input">
    <label for="select-category">Categoria</label>
    <select id="select-category" name="select-category" placeholder="Escolher categoria" required>
      ${categoriesOptions}
    </select>
  </div
`;

  formContainer.innerHTML = formHtml;

  const name = form.querySelector("#name");
  const description = form.querySelector("#description");
  const quantity = form.querySelector("#quantity");
  const categorySelect = form.querySelector("#select-category");
  const submitButton = form.querySelector("#form-submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = name.value;
    const descriptionValue = description.value;
    const quantityValue = quantity.value;
    const categoryId =
      categorySelect.options[categorySelect.selectedIndex].value;

    if (!nameValue || !descriptionValue || !quantityValue || !categoryId) {
      alert("Please fill in all fields");
      return;
    }

    const product = {
      name: nameValue,
      description: descriptionValue,
      quantity: quantityValue,
    };

    const category = {
      id: categoryId,
    };

    Create(product, category).then(async (response) => {
      window.location.reload();
    });
  });
}

export default handleProductForm;
