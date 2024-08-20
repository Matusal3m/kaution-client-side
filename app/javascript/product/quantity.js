import updateProductQuantity from "../actions/updateProductQuantity";

function quantityEvents() {
  console.log("quantity events");
  const products = Array.from(document.querySelectorAll(".product"));

  products.forEach((product) => {
    const quantity = product.querySelector(".product__quantity");
    let oldValue = quantity.value;

    quantity.addEventListener("focusout", (e) => {
      console.log("focusout")
      updateProductQuantity(e, oldValue);
      oldValue = e.target.value;
    });

  });
}

export default quantityEvents;