(()=>{function j(e){Array.from(document.querySelectorAll(".product")).forEach(o=>{o.querySelector(".product__name").textContent.includes(e)||e==""?o.classList.remove("product--desactive"):o.classList.add("product--desactive")})}var g=j;function G(){document.querySelector("#search__input").addEventListener("input",t=>{g(t.target.value)})}var h=G;function U(){let e=document.createElement("div");return e.classList.add("menu"),e.innerHTML=`
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
`,e}var E=U;function V(){let e=document.createElement("form");return e.classList.add("add__form"),e.innerHTML=`
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

  `,e}var b=V;var q="http://localhost:3000";async function m(){try{return await(await fetch(`${q}/user/all/category`)).json()}catch(e){return console.error("error fetching categories:",e),[]}}async function L({name:e,description:t},o){try{return(await fetch(`${q}/user/${o}/category`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t})})).ok}catch(r){console.error("Error creating category:",r)}}function Q(e,t){t.innerHTML=`
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Name" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descri\xE7\xE3o</label>
    <input type="text" id="description" name="description" placeholder="Description" required />
  </div>
`;let o=e.querySelector("#name"),r=e.querySelector("#description");e.querySelector("#form-submit").addEventListener("click",a=>{a.preventDefault();let c=o.value,s=r.value;if(!c||!s){alert("Please fill in all fields");return}let l={name:c,quantity:quantityValue};L(l).then(f=>{f&&window.location.reload()})})}var S=Q;var p="http://localhost:3000";async function C(e){try{return await(await fetch(`${p}/user/category/${e}/product`)).json()}catch(t){return console.error("error fetching products on category:",t),[]}}async function w({name:e,description:t,quantity:o},r){try{return(await fetch(`${p}/user/category/${r}/product`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t,quantity:o})})).ok}catch(n){return console.error("Error creating product:",n),[]}}async function x({id:e,name:t,description:o,quantity:r},n){try{return(await fetch(`${p}/user/category/${n}/product/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,description:o,quantity:r})})).ok}catch(a){console.error("Error updating product:",a)}}async function $(e,t){try{return(await fetch(`${p}/user/category/${t}/product/${e}`,{method:"DELETE"})).ok}catch(o){console.error("Error deleting product:",o)}}async function W(e,t){let o=await m(),r="";o.forEach(u=>{let i=document.createElement("option");i.value=u.id,i.textContent=u.name,r+=i.outerHTML});let n=`
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
    <input type="tel" id="quantity" name="quantity" placeholder="Quantidade" required />
  </div

  <div class="add__form__input">
    <label for="select-category">Categoria</label>
    <select id="select-category" name="select-category" placeholder="Escolher categoria" required>
      ${r}
    </select>
  </div
`;t.innerHTML=n;let a=e.querySelector("#name"),c=e.querySelector("#description"),s=e.querySelector("#quantity"),l=e.querySelector("#select-category");e.querySelector("#form-submit").addEventListener("click",u=>{u.preventDefault();let i=a.value,_=c.value,y=s.value,v=l.options[l.selectedIndex].value;if(!i||!_||!y||!v){alert("Please fill in all fields");return}w({name:i,description:_,quantity:y},v).then(async ie=>{window.location.reload()})})}var P=W;function z(e){Array.from(e.querySelectorAll("input[type='radio']")).forEach(o=>{o.addEventListener("change",r=>{let n=document.querySelector("#add__form__container");r.target.id!=="category"?P(e,n):S(e,n)})})}var T=z;function K(e){let t=b();return e.appendChild(t),t.querySelector(".add__form__close").addEventListener("click",()=>{e.remove()}),T(t),t}var M=K;function X(){if(document.querySelector(".container"))return;let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("container"),t.appendChild(E()),e.appendChild(t),document.querySelector(".menu__close").addEventListener("click",()=>{t.remove()}),document.querySelector("#add-menu").addEventListener("click",n=>{t.innerHTML="",M(t),console.log("add menu button clicked")})}var k=X;var Y=document.querySelector("#menu-button");function Z(){Y.addEventListener("click",()=>{k(),console.log("menu button clicked")})}var D=Z;function A(){h(),D()}function te(e){let t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`
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
  `,t.addEventListener("click",a=>{a.target.classList.contains("modal")&&t.remove()});let o=e.parentElement.id;console.log(o),t.querySelector(".modal__buttons__submit").addEventListener("click",a=>{a.preventDefault();let c={id:e.id,name:t.querySelector("#name").value,description:t.querySelector("#description").value,quantity:e.querySelector(".product__quantity").value};x(c,o).then(s=>{console.log("Product updated: ",s),window.location.reload()})}),t.querySelector(".modal__buttons__delete").addEventListener("click",a=>{a.preventDefault(),$(e.id,o).then(c=>{console.log("Product deleted: ",c),e.remove(),t.remove()})}),document.querySelector("main").append(t)}var B=te;function H(e){let t=e.target.closest(".product"),o=setTimeout(()=>{B(t)},400);e.target.dataset.pressTimer=o}function d(e){let t=e.target.dataset.pressTimer;clearTimeout(t)}function oe(e){e.addEventListener("mousedown",H),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("touchstart",H),e.addEventListener("touchend",d),e.addEventListener("touchmove",d),e.addEventListener("touchcancel",d)}var N=oe;function re({id:e,name:t,description:o,quantity:r}){let n=document.createElement("div");return n.id=e,n.classList.add("product"),n.innerHTML=`
    <div class="product__wrapper" >
      <span class="product__name">${t}</span>
      <span class="product__description">${o}</span>
    </div>
    <input type="tel" value="${r}" class="product__quantity"/>
  `,N(n),n}var F=re;function ne(e){e.addEventListener("click",t=>{t.target.classList.contains("category__name")&&(e.classList.toggle("category--toggle"),e.querySelectorAll(":not(.category__name)").forEach(r=>r.classList.toggle("product--toggle")))})}var I=ne;async function ae(e){let t=document.createElement("div");return t.id=e.id,t.classList.add("category"),t.innerHTML=`<div class="category__name">${e.name}</div>`,I(t),(await C(e.id)).forEach(r=>{let n=F(r);t.appendChild(n)}),t}var O=ae;document.addEventListener("DOMContentLoaded",async()=>{try{let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("categories-wrapper");let o=await m(),r=await Promise.all(o.map(O));t.append(...r),e.appendChild(t)}catch(e){console.error("Error rendering categories:",e)}A()});})();
