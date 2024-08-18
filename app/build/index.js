(()=>{function E({id:e,name:t,description:r,quantity:n}){let o=document.createElement("div");return o.id=`product-${t}`,o.classList.add("product"),o.innerHTML=`
    <div class="product__wrapper" >
      <span class="product__name">${t}</span>
      <span class="product__description">${r}</span>
    </div>
    <input type="number" value="${n}" class="product__quantity"/>
  `,o}var c=E;var L="http://localhost:3000";async function a(e){try{return await(await fetch(`${L}/user/category/${e.id}/product`)).json()}catch(t){return console.error("error fetching products on category:",t),[]}}async function $(e){let t=document.createElement("div");return t.id=`category-${e.name}`,t.classList.add("category"),t.innerHTML=`<div class="category__name">${e.name}</div>`,(await a(e)).forEach(n=>{let o=c(n);t.appendChild(o)}),t}var s=$;var w="http://localhost:3000";async function i(){try{return await(await fetch(`${w}/user/all/category`)).json()}catch(e){return console.error("error fetching categories:",e),[]}}async function q(){try{let e=document.querySelector("main"),t=await i();for(let r of t){let n=await s(r);e.appendChild(n)}}catch(e){console.error("Error rendering categories:",e)}}var d=q;function x(e){Array.from(document.querySelectorAll(".product")).forEach(r=>{r.querySelector(".product__name").textContent.includes(e)||e==""?r.classList.remove("product--desactive"):r.classList.add("product--desactive")})}var u=x;function S(){document.querySelector("#search__input").addEventListener("input",t=>{u(t.target.value)})}var l=S;function k(e,t){if(!(t.target.className=="category__name"))return;e.classList.toggle("category--toggle"),Array.from(e.children).forEach(o=>{o.classList.contains("category__name")||o.classList.toggle("product--toggle")})}var p=k;function T(){Array.from(document.querySelectorAll(".category")).forEach(t=>{t.addEventListener("click",r=>p(t,r))})}var m=T;function A(){let e=document.createElement("div");return e.classList.add("menu"),e.innerHTML=`
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
`,e}var f=A;function M(){let e=document.createElement("form");return e.classList.add("add__form"),e.innerHTML=`
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

  `,e}var y=M;function P(e){let t=y();return e.appendChild(t),t.querySelector(".add__form__close").addEventListener("click",()=>{e.remove()}),t}var _=P;function N(){if(document.querySelector(".container"))return;let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("container"),t.appendChild(f()),e.appendChild(t),document.querySelector(".menu__close").addEventListener("click",()=>{t.remove()}),document.querySelector("#add-menu").addEventListener("click",o=>{t.innerHTML="",_(t),console.log("add menu button clicked")})}var g=N;var D=document.querySelector("#menu-button");function H(){D.addEventListener("click",()=>{g(),console.log("menu button clicked")})}var h=H;function v(){l(),m(),h()}document.addEventListener("DOMContentLoaded",async()=>{await d(),v()});})();
