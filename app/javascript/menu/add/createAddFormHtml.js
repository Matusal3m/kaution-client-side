function createAddFormHtml() {
  const form = document.createElement("form");
  form.classList.add("add__form");

  form.innerHTML = `
    <div class="add__form__wrapper">
    <div class="add__form__head-wrapper">
      <div class="add__form__title">Adicionar</div>
      <div class="add__form__close"></div>
    </div>

    <div class="add__form__radio">
      <label for="category">Category</label>
      <input type="radio" id="category" name="category" value="category" checked />
      <label for="product">Product</label>
      <input type="radio" id="product" name="category" value="product" />
    </div>

    <div id="add__form__container">
      <div class="add__form__input">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Nome" required />
      </div>
      <div class="add__form__input">
        <label for="description">Descrição</label>
        <input type="text" id="description" name="description" placeholder="Descrição" required />
      </div>
    </div>

    <div class="add__form__input">
      <input type="submit" value="Adicionar" id="form-submit"/>
    </div> 
   </div>

  `;

  return form;
}

export default createAddFormHtml;
