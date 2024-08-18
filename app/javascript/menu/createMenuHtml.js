function createMenuHtml() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.innerHTML = `
    <div class="wrapper">
      <span class="menu__title">Menu</span>
      <div class="menu__close"></div>
    </div>
    <ul class="menu__list">
      <li class="menu__list__item">
        <span class="menu__link" id="add-menu" >Adicionar</span>
      </li>
      <li class="menu__list__item">
        <a href="#about" class="menu__link">About</a>
      </li>
    </ul>
`;

  return menu;
}

export default createMenuHtml;
