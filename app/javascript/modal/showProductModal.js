import { Update, Delete } from "../product/fetchProducts";

/**
 *
 * @param {HTMLDivElement} productElement
 */

function showProductModal(productElement) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
  <form class="modal__wrapper">
    <div class="modal__content">
      <div class="modal__title">Modificar produto</div>
      <div class="modal__name">
        <label for="name">Nome</label>
        <input type="text" value="${
          productElement.querySelector(".product__name").textContent
        }" id="name">
      </div>
      <div class="modal__description">
        <label for="name">Descrição</label>
        <input type="text" value="${
          productElement.querySelector(".product__description").textContent
        }" id="description">
      </div>
      <div class="modal__buttons">
        <button class="modal__buttons__delete">Deletar</button>    
        <button class="modal__buttons__submit">Modificar</button>
      </div>
    </div>
  </form>
  `;

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modal.remove();
    }
  });

  const categoryId = productElement.parentElement.id;
  console.log(categoryId);

  const updateButton = modal.querySelector(".modal__buttons__submit");
  updateButton.addEventListener("click", (e) => {
    e.preventDefault();
    const product = {
      id: productElement.id,
      name: modal.querySelector("#name").value,
      description: modal.querySelector("#description").value,
      quantity: productElement.querySelector(".product__quantity").value,
    };

    Update(product, categoryId).then((response) => {
      console.log("Product updated: ", response);

      window.location.reload();
    });
  });

  const deleteButton = modal.querySelector(".modal__buttons__delete");
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    Delete(productElement.id, categoryId).then((response) => {
      console.log("Product deleted: ", response);
      productElement.remove();
      modal.remove();
    });
  });

  document.querySelector("main").append(modal);
}

export default showProductModal;
