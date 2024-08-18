import createMenu from "../menu";

const menuButton = document.querySelector("#menu-button");

function menu() {
  menuButton.addEventListener("click", () => {
    createMenu();
    console.log("menu button clicked");
  });
}

export default menu;
