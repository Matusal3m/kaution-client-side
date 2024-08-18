(()=>{function V({id:e,name:t,description:r,quantity:n}){let o=document.createElement("div");return o.id=e,o.classList.add("product"),o.innerHTML=`
    <div class="product__wrapper" >
      <span class="product__name">${t}</span>
      <span class="product__description">${r}</span>
    </div>
    <input type="number" value="${n}" class="product__quantity"/>
  `,o}var g=V;var m="http://localhost:3000";async function h(e){try{return await(await fetch(`${m}/user/category/${e.id}/product`)).json()}catch(t){return console.error("error fetching products on category:",t),[]}}async function E({name:e,description:t,quantity:r},n){try{return(await fetch(`${m}/user/category/${n.id}/product`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t,quantity:r})})).ok}catch(o){return console.error("Error creating product:",o),[]}}async function b({id:e,name:t,description:r,quantity:n},o){try{return(await fetch(`${m}/user/category/${o}/product/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,description:r,quantity:n})})).ok}catch(a){console.error("Error updating product:",a)}}async function q(e,t){try{return(await fetch(`${m}/user/category/${t}/product/${e}`,{method:"DELETE"})).ok}catch(r){console.error("Error deleting product:",r)}}async function Q(e){let t=document.createElement("div");return t.id=e.id,t.classList.add("category"),t.innerHTML=`<div class="category__name">${e.name}</div>`,(await h(e)).forEach(n=>{let o=g(n);t.appendChild(o)}),t}var L=Q;var C="http://localhost:3000";async function p(){try{return await(await fetch(`${C}/user/all/category`)).json()}catch(e){return console.error("error fetching categories:",e),[]}}async function S({name:e,description:t},r){try{return(await fetch(`${C}/user/${r}/category`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,description:t})})).ok}catch(n){console.error("Error creating category:",n)}}async function W(){try{document.querySelector(".categories-wrapper")&&document.querySelector(".categories-wrapper").remove();let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("categories-wrapper");let r=await p();for(let n of r){let o=await L(n);t.appendChild(o),e.appendChild(t)}}catch(e){console.error("Error rendering categories:",e)}}var f=W;function z(e){Array.from(document.querySelectorAll(".product")).forEach(r=>{r.querySelector(".product__name").textContent.includes(e)||e==""?r.classList.remove("product--desactive"):r.classList.add("product--desactive")})}var x=z;function K(){document.querySelector("#search__input").addEventListener("input",t=>{x(t.target.value)})}var w=K;function X(e,t){if(!(t.target.className=="category__name"))return;e.classList.toggle("category--toggle"),Array.from(e.children).forEach(o=>{o.classList.contains("category__name")||o.classList.toggle("product--toggle")})}var $=X;function Y(){Array.from(document.querySelectorAll(".category")).forEach(t=>{t.addEventListener("click",r=>$(t,r))})}var T=Y;function Z(){let e=document.createElement("div");return e.classList.add("menu"),e.innerHTML=`
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
`,e}var P=Z;function ee(){let e=document.createElement("form");return e.classList.add("add__form"),e.innerHTML=`
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

  `,e}var M=ee;function te(e,t){t.innerHTML=`
  <div class="add__form__input">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" placeholder="Name" required />
  </div>
  
  <div class="add__form__input">
    <label for="description">Descri\xE7\xE3o</label>
    <input type="text" id="description" name="description" placeholder="Description" required />
  </div>
`;let r=e.querySelector("#name"),n=e.querySelector("#description");e.querySelector("#form-submit").addEventListener("click",a=>{a.preventDefault();let c=r.value,s=n.value;if(!c||!s){alert("Please fill in all fields");return}let l={name:c,quantity:quantityValue};S(l).then(U=>{f()})})}var k=te;async function re(e,t){let r=await p(),n="";r.forEach(u=>{let i=document.createElement("option");i.value=u.id,i.textContent=u.name,n+=i.outerHTML});let o=`
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
`;t.innerHTML=o;let a=e.querySelector("#name"),c=e.querySelector("#description"),s=e.querySelector("#quantity"),l=e.querySelector("#select-category");e.querySelector("#form-submit").addEventListener("click",u=>{u.preventDefault();let i=a.value,y=c.value,_=s.value,v=l.options[l.selectedIndex].value;if(!i||!y||!_||!v){alert("Please fill in all fields");return}E({name:i,description:y,quantity:_},{id:v}).then(async pe=>{window.location.reload()})})}var A=re;function oe(e){Array.from(e.querySelectorAll("input[type='radio']")).forEach(r=>{r.addEventListener("change",n=>{let o=document.querySelector("#add__form__container");n.target.id!=="category"?A(e,o):k(e,o)})})}var D=oe;function ne(e){let t=M();return e.appendChild(t),t.querySelector(".add__form__close").addEventListener("click",()=>{e.remove()}),D(t),t}var B=ne;function ae(){if(document.querySelector(".container"))return;let e=document.querySelector("main"),t=document.createElement("div");t.classList.add("container"),t.appendChild(P()),e.appendChild(t),document.querySelector(".menu__close").addEventListener("click",()=>{t.remove()}),document.querySelector("#add-menu").addEventListener("click",o=>{t.innerHTML="",B(t),console.log("add menu button clicked")})}var H=ae;var ce=document.querySelector("#menu-button");function ie(){ce.addEventListener("click",()=>{H(),console.log("menu button clicked")})}var N=ie;function se(e){let t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`
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
  `,t.addEventListener("click",a=>{a.target.classList.contains("modal")&&t.remove()});let r=e.parentElement.id;console.log(r),t.querySelector(".modal__buttons__submit").addEventListener("click",a=>{a.preventDefault();let c={id:e.id,name:t.querySelector("#name").value,description:t.querySelector("#description").value,quantity:e.querySelector(".product__quantity").value};b(c,r).then(s=>{console.log("Product updated: ",s),window.location.reload()})}),t.querySelector(".modal__buttons__delete").addEventListener("click",a=>{a.preventDefault(),q(e.id,r).then(c=>{console.log("Product deleted: ",c),e.remove(),t.remove()})}),document.querySelector("main").append(t)}var F=se;var O;function de(){Array.from(document.querySelectorAll(".product")).forEach(t=>{t.addEventListener("mousedown",r=>{I(r.target.closest(".product"))}),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("touchstart",r=>{I(r.target.closest(".product"))}),t.addEventListener("touchend",d),t.addEventListener("touchmove",d),t.addEventListener("touchcancel",d)})}function I(e){O=setTimeout(()=>{F(e)},400)}function d(){clearTimeout(O)}var j=de;function G(){w(),T(),N(),j()}document.addEventListener("DOMContentLoaded",async()=>{await f(),G()});})();
