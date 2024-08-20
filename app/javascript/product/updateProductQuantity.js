import { Update } from "../product/fetchProducts";

function updateProductQuantity(event, oldValue) {
  const currentValue = parseInt(event.target.value);

  if(isNaN(currentValue)) {
    event.target.closest(".product").querySelector(".product__quantity").value = oldValue;
    return;
  }

  const product = {
    id: event.target.closest(".product").id,
    name: event.target.closest(".product").querySelector(".product__name").textContent,
    description: event.target.closest(".product").querySelector(".product__description").textContent,
    quantity: currentValue,
  }

  const categoryId = event.target.closest(".category").id;

  Update(product, categoryId).then((response) => {
    console.log("product quantity updated: ", response);
  });
}

export default updateProductQuantity;