(()=>{function s({id:e,name:o,description:r,quantity:t}){let n=document.createElement("div");return n.id=`product-${e}`,n.className="product",n.innerHTML=`
    <div class="wrapper >
      <span class="product__name">${o}</span>
      <span class="product__description">${r}</span>
    </div>
    <input type="number" value="${t}" class="product__quantity"/>
  `,n}var a=s;async function i(){try{return(await(await fetch("https://fakestoreapi.com/products")).json()).map(t=>(t.quantity=Math.floor(Math.random()*100),t.name=t.title,t.description=t.description.substring(0,100)+"...",t))}catch(e){return console.error(e),[]}}var c=i;async function u(){try{let e=document.querySelector("main");(await c()).forEach(r=>{let t=a(r);e.appendChild(t)})}catch(e){console.error("Error fetching products:",e)}}u();})();
