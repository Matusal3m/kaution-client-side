(()=>{var m="http://localhost:3000";async function g(e){try{return await(await fetch(`${m}/user/category/${e}/product`)).json()}catch(t){return console.error("error fetching products on category:",t),[]}}async function h({name:e,description:t,quantity:r},o){try{return(await fetch(`${m}/user/category/${o}/product`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t,quantity:r})})).ok}catch(n){return console.error("Error creating product:",n),[]}}async function E({id:e,name:t,description:r,quantity:o},n){try{return(await fetch(`${m}/user/category/${n}/product/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,description:r,quantity:o})})).ok}catch(a){console.error("Error updating product:",a)}}async function b(e,t){try{return(await fetch(`${m}/user/category/${t}/product/${e}`,{method:"DELETE"})).ok}catch(r){console.error("Error deleting product:",r)}}function U(e){let t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`
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
  `,t.addEventListener("click",a=>{a.target.classList.contains("modal")&&t.remove()});let r=e.parentElement.id;console.log(r),t.querySelector(".modal__buttons__submit").addEventListener("click",a=>{a.preventDefault();let c={id:e.id,name:t.querySelector("#name").value,description:t.querySelector("#description").value,quantity:e.querySelector(".product__quantity").value};E(c,r).then(s=>{console.log("Product updated: ",s),window.location.reload()})}),t.querySelector(".modal__buttons__delete").addEventListener("click",a=>{a.preventDefault(),b(e.id,r).then(c=>{console.log("Product deleted: ",c),e.remove(),t.remove()})}),document.querySelector("main").append(t)}var q=U;function L(e){let t=e.target.closest(".product"),r=setTimeout(()=>{q(t)},400);e.target.dataset.pressTimer=r}function d(e){let t=e.target.dataset.pressTimer;clearTimeout(t)}function V(e){e.addEventListener("mousedown",L),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("touchstart",L),e.addEventListener("touchend",d),e.addEventListener("touchmove",d),e.addEventListener("touchcancel",d)}var C=V;function J({id:e,name:t,description:r,quantity:o}){let n=document.createElement("div");return n.id=e,n.classList.add("product"),n.innerHTML=`
    <div class="product__wrapper" >
      <span class="product__name">${t}</span>
      <span class="product__description">${r}</span>
    </div>
    <input type="tel" value="${o}" class="product__quantity"/>
  `,C(n),n}var S=J;function Q(e){e.addEventListener("click",t=>{t.target.classList.contains("category__name")||(e.classList.toggle("category--toggle"),e.querySelectorAll(":not(.category__name)").forEach(o=>o.classList.toggle("product--toggle")))})}var x=Q;async function R(e){let t=document.createElement("div");return t.id=e.id,t.classList.add("category"),t.innerHTML=`<div class="category__name">${e.name}</div>`,x(t),(await g(e.id)).forEach(o=>{let n=S(o);t.appendChild(n)}),t}var w=R;var $="http://localhost:3000";async function p(){try{return await(await fetch(`${$}/user/all/category`)).json()}catch(e){return console.error("error fetching categories:",e),[]}}async function T({name:e,description:t},r){try{return(await fetch(`${$}/user/${r}/category`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t})})).ok}catch(o){console.error("Error creating category:",o)}}async function z(){try{let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("categories-wrapper");let r=await p();for(let o of r){let n=await w(o);t.appendChild(n),e.appendChild(t)}}catch(e){console.error("Error rendering categories:",e)}}var f=z;function K(e){Array.from(document.querySelectorAll(".product")).forEach(r=>{r.querySelector(".product__name").textContent.includes(e)||e==""?r.classList.remove("product--desactive"):r.classList.add("product--desactive")})}var P=K;function X(){document.querySelector("#search__input").addEventListener("input",t=>{P(t.target.value)})}var M=X;function Y(){let e=document.createElement("div");return e.classList.add("menu"),e.innerHTML=`
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
`,e}var k=Y;function Z(){let e=document.createElement("form");return e.classList.add("add__form"),e.innerHTML=`
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

  `,e}var D=Z;function ee(e,t){t.innerHTML=`
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Name" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descri\xE7\xE3o</label>
    <input type="text" id="description" name="description" placeholder="Description" required />
  </div>
`;let r=e.querySelector("#name"),o=e.querySelector("#description");e.querySelector("#form-submit").addEventListener("click",a=>{a.preventDefault();let c=r.value,s=o.value;if(!c||!s){alert("Please fill in all fields");return}let l={name:c,quantity:quantityValue};T(l).then(j=>{f()})})}var A=ee;async function te(e,t){let r=await p(),o="";r.forEach(u=>{let i=document.createElement("option");i.value=u.id,i.textContent=u.name,o+=i.outerHTML});let n=`
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
      ${o}
    </select>
  </div
`;t.innerHTML=n;let a=e.querySelector("#name"),c=e.querySelector("#description"),s=e.querySelector("#quantity"),l=e.querySelector("#select-category");e.querySelector("#form-submit").addEventListener("click",u=>{u.preventDefault();let i=a.value,_=c.value,y=s.value,v=l.options[l.selectedIndex].value;if(!i||!_||!y||!v){alert("Please fill in all fields");return}h({name:i,description:_,quantity:y},v).then(async de=>{window.location.reload()})})}var B=te;function re(e){Array.from(e.querySelectorAll("input[type='radio']")).forEach(r=>{r.addEventListener("change",o=>{let n=document.querySelector("#add__form__container");o.target.id!=="category"?B(e,n):A(e,n)})})}var H=re;function oe(e){let t=D();return e.appendChild(t),t.querySelector(".add__form__close").addEventListener("click",()=>{e.remove()}),H(t),t}var N=oe;function ne(){if(document.querySelector(".container"))return;let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("container"),t.appendChild(k()),e.appendChild(t),document.querySelector(".menu__close").addEventListener("click",()=>{t.remove()}),document.querySelector("#add-menu").addEventListener("click",n=>{t.innerHTML="",N(t),console.log("add menu button clicked")})}var F=ne;var ae=document.querySelector("#menu-button");function ce(){ae.addEventListener("click",()=>{F(),console.log("menu button clicked")})}var I=ce;function O(){M(),I()}document.addEventListener("DOMContentLoaded",async()=>{await f(),O()});})();
