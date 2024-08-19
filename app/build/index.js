(()=>{function Q({id:e,name:t,description:r,quantity:n}){let o=document.createElement("div");return o.id=e,o.classList.add("product"),o.innerHTML=`
    <div class="product__wrapper" >
      <span class="product__name">${t}</span>
      <span class="product__description">${r}</span>
    </div>
    <input type="number" value="${n}" class="product__quantity"/>
  `,o}var h=Q;var p="http://localhost:3000";async function q(e){try{return await(await fetch(`${p}/user/category/${e.id}/product`)).json()}catch(t){return console.error("error fetching products on category:",t),[]}}async function E({name:e,description:t,quantity:r},n){try{return(await fetch(`${p}/user/category/${n}/product`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t,quantity:r})})).ok}catch(o){return console.error("Error creating product:",o),[]}}async function m({id:e,name:t,description:r,quantity:n},o){try{return(await fetch(`${p}/user/category/${o}/product/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,description:r,quantity:n})})).ok}catch(a){console.error("Error updating product:",a)}}async function b(e,t){try{return(await fetch(`${p}/user/category/${t}/product/${e}`,{method:"DELETE"})).ok}catch(r){console.error("Error deleting product:",r)}}async function W(e){let t=document.createElement("div");return t.id=e.id,t.classList.add("category"),t.innerHTML=`<div class="category__name">${e.name}</div>`,(await q(e)).forEach(n=>{let o=h(n);t.appendChild(o)}),t}var L=W;var S="http://localhost:3000";async function f(){try{return await(await fetch(`${S}/user/all/category`)).json()}catch(e){return console.error("error fetching categories:",e),[]}}async function C({name:e,description:t},r){try{return(await fetch(`${S}/user/${r}/category`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t})})).ok}catch(n){console.error("Error creating category:",n)}}async function K(){try{document.querySelector(".categories-wrapper")&&document.querySelector(".categories-wrapper").remove();let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("categories-wrapper");let r=await f();for(let n of r){let o=await L(n);t.appendChild(o),e.appendChild(t)}}catch(e){console.error("Error rendering categories:",e)}}var y=K;function X(e){Array.from(document.querySelectorAll(".product")).forEach(r=>{r.querySelector(".product__name").textContent.includes(e)||e==""?r.classList.remove("product--desactive"):r.classList.add("product--desactive")})}var x=X;function Y(){document.querySelector("#search__input").addEventListener("input",t=>{x(t.target.value)})}var w=Y;function Z(e,t){if(!(t.target.className=="category__name"))return;e.classList.toggle("category--toggle"),Array.from(e.children).forEach(o=>{o.classList.contains("category__name")||o.classList.toggle("product--toggle")})}var $=Z;function ee(){Array.from(document.querySelectorAll(".category")).forEach(t=>{t.addEventListener("click",r=>$(t,r))})}var P=ee;function te(){let e=document.createElement("div");return e.classList.add("menu"),e.innerHTML=`
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
`,e}var T=te;function re(){let e=document.createElement("form");return e.classList.add("add__form"),e.innerHTML=`
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
        <label for="description">Descri\xE7\xE3o</label>
        <input type="text" id="description" name="description" placeholder="Descri\xE7\xE3o" required />
      </div>
    </div>

    <div class="add__form__input">
      <input type="submit" value="Adicionar" id="form-submit"/>
    </div> 
   </div>

  `,e}var A=re;function oe(e,t){t.innerHTML=`
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Name" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descri\xE7\xE3o</label>
    <input type="text" id="description" name="description" placeholder="Description" required />
  </div>
`;let r=e.querySelector("#name"),n=e.querySelector("#description");e.querySelector("#form-submit").addEventListener("click",a=>{a.preventDefault();let c=r.value,i=n.value;if(!c||!i){alert("Please fill in all fields");return}let l={name:c,quantity:quantityValue};C(l).then(J=>{y()})})}var M=oe;async function ne(e,t){let r=await f(),n="";r.forEach(u=>{let s=document.createElement("option");s.value=u.id,s.textContent=u.name,n+=s.outerHTML});let o=`
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Nome" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descri\xE7\xE3o</label>
    <input type="text" id="description" name="description" placeholder="Descri\xE7\xE3o" required />
  </div>
  
  <div class="add__form__input">
    <label for="quantity">Quantidade</label>
    <input type="number" id="quantity" name="quantity" placeholder="Quantidade" required />
  </div

  <div class="add__form__input">
    <label for="select-category">Categoria</label>
    <select id="select-category" name="select-category" placeholder="Escolher categoria" required>
      ${n}
    </select>
  </div
`;t.innerHTML=o;let a=e.querySelector("#name"),c=e.querySelector("#description"),i=e.querySelector("#quantity"),l=e.querySelector("#select-category");e.querySelector("#form-submit").addEventListener("click",u=>{u.preventDefault();let s=a.value,_=c.value,g=i.value,v=l.options[l.selectedIndex].value;if(!s||!_||!g||!v){alert("Please fill in all fields");return}E({name:s,description:_,quantity:g},v).then(async _e=>{window.location.reload()})})}var k=ne;function ae(e){Array.from(e.querySelectorAll("input[type='radio']")).forEach(r=>{r.addEventListener("change",n=>{let o=document.querySelector("#add__form__container");n.target.id!=="category"?k(e,o):M(e,o)})})}var D=ae;function ce(e){let t=A();return e.appendChild(t),t.querySelector(".add__form__close").addEventListener("click",()=>{e.remove()}),D(t),t}var N=ce;function se(){if(document.querySelector(".container"))return;let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("container"),t.appendChild(T()),e.appendChild(t),document.querySelector(".menu__close").addEventListener("click",()=>{t.remove()}),document.querySelector("#add-menu").addEventListener("click",o=>{t.innerHTML="",N(t),console.log("add menu button clicked")})}var B=se;var ie=document.querySelector("#menu-button");function de(){ie.addEventListener("click",()=>{B(),console.log("menu button clicked")})}var H=de;function le(e){let t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`
  <form class="modal__wrapper">
    <div class="modal__content">
      <div class="modal__title">Modificar produto</div>
      <div class="modal__name">
        <label for="name">Nome</label>
        <input type="text" value="${e.querySelector(".product__name").textContent}" id="name">
      </div>
      <div class="modal__description">
        <label for="name">Descri\xE7\xE3o</label>
        <input type="text" value="${e.querySelector(".product__description").textContent}" id="description">
      </div>
      <div class="modal__buttons">
        <button class="modal__buttons__delete">Deletar</button>    
        <button class="modal__buttons__submit">Modificar</button>
      </div>
    </div>
  </form>
  `,t.addEventListener("click",a=>{a.target.classList.contains("modal")&&t.remove()});let r=e.parentElement.id;console.log(r),t.querySelector(".modal__buttons__submit").addEventListener("click",a=>{a.preventDefault();let c={id:e.id,name:t.querySelector("#name").value,description:t.querySelector("#description").value,quantity:e.querySelector(".product__quantity").value};m(c,r).then(i=>{console.log("Product updated: ",i),window.location.reload()})}),t.querySelector(".modal__buttons__delete").addEventListener("click",a=>{a.preventDefault(),b(e.id,r).then(c=>{console.log("Product deleted: ",c),e.remove(),t.remove()})}),document.querySelector("main").append(t)}var I=le;var O;function ue(){Array.from(document.querySelectorAll(".product")).forEach(t=>{t.addEventListener("mousedown",r=>{F(r.target.closest(".product"))}),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("touchstart",r=>{F(r.target.closest(".product"))}),t.addEventListener("touchend",d),t.addEventListener("touchmove",d),t.addEventListener("touchcancel",d)})}function F(e){O=setTimeout(()=>{I(e)},400)}function d(){clearTimeout(O)}var V=ue;function pe(e,t){let r=parseInt(e.target.value);if(isNaN(r)){e.target.closest(".product").querySelector(".product__quantity").value=t;return}let n={id:e.target.closest(".product").id,name:e.target.closest(".product").querySelector(".product__name").textContent,description:e.target.closest(".product").querySelector(".product__description").textContent,quantity:r},o=e.target.closest(".category").id;m(n,o).then(a=>{console.log("product quantity updated: ",a)})}var j=pe;function me(){console.log("quantity events"),Array.from(document.querySelectorAll(".product")).forEach(t=>{let r=t.querySelector(".product__quantity"),n=r.value;r.addEventListener("focusout",o=>{console.log("focusout"),j(o,n),n=o.target.value})})}var U=me;function G(){w(),P(),H(),V(),U()}document.addEventListener("DOMContentLoaded",async()=>{await y(),G()});})();
