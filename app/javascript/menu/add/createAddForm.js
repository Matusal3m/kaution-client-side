function createAddForm() {
  const form = document.createElement("form");
  form.classList.add("add__form");

  form.innerHTML = `
    <div class="add__form__wrapper">
    <div class="add__form__head-wrapper">
      <div class="add__form__title">Adicionar</div>
      <div class="add__form__close"></div>
    </div>

    <div class="add__form__input">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Name" required />
    </div>

    <div class="add__form__input">
      <label for="description">Description</label>
      <input type="text" id="description" name="description" placeholder="Description" required />
    </div>

    <div class="add__form__input">
      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" placeholder="Quantity" required />
    </div>

    <div class="add__form__input">
      <input type="submit" value="Add" />
    </div>  
   </div>

  `;

  return form;
}

export default createAddForm;
