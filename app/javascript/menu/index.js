import createMenuHtml from "./createMenuHtml";
import createAddForm from "./add";

function createMenu() {
  if (document.querySelector(".container")) return;

  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(createMenuHtml());

  main.appendChild(container);

  const closeButton = document.querySelector(".menu__close");
  closeButton.addEventListener("click", () => {
    container.remove();
  });

  const addMenu = document.querySelector("#add-menu");
  addMenu.addEventListener("click", (e) => {
    container.innerHTML = "";
    createAddForm(container);
    
    console.log("add menu button clicked");
  });

}

export default createMenu;
