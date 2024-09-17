let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
const nav=document.querySelector(".navbar__menu");
let ul=document.getElementById("navbar__list");
let asul=document.getElementById("aside__list");
let products = [];
let prodimage = [];
let cart = [];
var user="";
var srcs=[];
//var yes="";
//let sect=[]



const navbar= ()=>{
    let close=document.createElement("button");
    close.innerHTML="X";
    close.setAttribute("onclick",`show("#navbar__list")`);
    ul.appendChild(close);
    close.classList.add("off");
    
    for(let i=0;i<6;i++){
        let n=`Section ${i}`;
        let c=`section${i}`;
        let a =`<a class="menu__link" id="${c}"  ></a>`;
        let li=document.createElement("li");
        li.setAttribute('class',`nav__item ${c}`);
        let li2=document.createElement("li");
        li2.setAttribute('class',`nav__item ${c}`);
        ul.appendChild(li);
        asul.appendChild(li2);
        let s = document.querySelector(`.${c}`);
        s.innerHTML=a;
        s = document.querySelector(`aside .${c}`);
        s.innerHTML=a;
    };
    let a =document.querySelector("#section4");
    a.innerHTML = "الرئيسية";
    a.setAttribute("href","../../GigiApp.html");
    a =document.querySelector("#section3");
    a.innerHTML = `<button class="on" onclick="show1('.navbar__menu #navbar__list2 ')">منتجاتنا </button>`;  
    a =document.querySelector("#section2");
    a.innerHTML = "تعرف علينا ";  
    a =document.querySelector("#section1");
    a.innerHTML = "العروض "; 
    a =document.querySelector("#section5");
    a.innerHTML=`
     <input type="search" id="search"  placeholder="search"/>`;
    a =document.querySelector("#aside__list #section4");
    a.innerHTML = "الرئيسية";
    a.setAttribute("href","../../GigiApp.html");
    a =document.querySelector("#aside__list #section3");
    a.innerHTML = `<button class="on" onclick="show1('#aside__list2')">منتجاتنا </button>`;  
    a =document.querySelector("#aside__list #section2");
    a.innerHTML = "تعرف علينا ";  
    a =document.querySelector("#aside__list #section1");
    a.innerHTML = "العروض "; 
    a =document.querySelector("#aside__list #section0");
    a.innerHTML = "التواصل والاستفسار "; 
    a.setAttribute("href" , "https://api.whatsapp.com/send?phone=972568515279" );
    a =document.querySelector("#aside__list #section5");
        a.innerHTML=`
        <input type="search" id="search" placeholder="searchs"/>
        <button onclick=show("#navbar__list")>ابحث</button>`;
  };
  navbar();

  const minue=()=>{
    let nav1=document.querySelector(".nav1");
    let button =document.createElement("button");
    button.setAttribute("class","menu__link");
    button.setAttribute("id","minue");
    button.setAttribute("onclick", `show("#navbar__list")`);
    button.innerHTML=`<a><i class="fa-solid fa-magnifying-glass fa-xl" style="color: #000000;"></i><a>`;
    nav1.insertAdjacentElement("afterbegin",button);
    button=document.createElement("button");
    button.setAttribute("onclick", `show("#navbar__list")`);
    button.setAttribute("id","minue2");
    button.innerHTML=`<i class="fa-solid fa-bars fa-2xl"></i>`
    nav1.insertAdjacentElement("afterbegin",button);
}
minue();
const searchInput = document.querySelector(`input[type="search"]`);


searchInput.addEventListener("input", (e) =>{
    user="us";
    let  value = e.target.value.toLowerCase();
    user = products.findIndex((values) =>( value!= "" && values.name!=undefined && values.name.toLowerCase().includes(value) && values.section == localStorage.getItem("section")));
    let listSearch=document.querySelector(".listSearch");
    if(user==""||user==null||user=="us"){
        listSearch.innerHTML=``;
    }
    else{
        listSearch.innerHTML=``; 
        let elem;
        for(let i=0;i<products[user].lengths;i++){
            elem=document.querySelector(`#item${user+i}`);
            const clone = elem.cloneNode(true);
            listSearch.appendChild(clone);}
    }  
})

const searchInput2 = document.querySelector(`aside input[type="search"]`);

searchInput2.addEventListener("input", (e) =>{
    user="us";
    let  value = e.target.value.toLowerCase();
    user = products.findIndex((values) =>( value!= "" && values.name!=undefined && values.name.toLowerCase().includes(value) && values.section == localStorage.getItem("section")));
    let listSearch=document.querySelector(".listSearch");
    if(user==""||user==null||user=="us"){
        listSearch.innerHTML=``;
    }
    else{
        listSearch.innerHTML=``; 
        let elem;
        for(let i=0;i<products[user].lengths;i++){
            elem=document.querySelector(`#item${user+i}`);
            const clone = elem.cloneNode(true);
            listSearch.appendChild(clone);}
    }  
})

let d=0;
function show(str){
    asul=document.querySelector("aside");
    let mnue=document.querySelector(str);
    let display=mnue.style.display;
    if(d==0){
        asul.classList.add("aside");
        d=1;   
    }
    else{
        asul.classList.remove("aside"); 
        d=0;
    }
  }

function show1(str){
    let mnue=document.querySelector(str);
    let cont=document.querySelector(".container ");
    let display=mnue.style.display;
    if(display=="none"){
        mnue.style.display= "flex";
        cont.classList.remove("hi");
    }
    else{
        mnue.style.display= "none";
        cont.classList.add("hi");
    }
  }

  ul=document.getElementById("navbar__list2");
  asul=document.getElementById("aside__list2");
  const product= ()=>{
      for(let i=0;i<10;i++){
        let n=`Section ${i+6}`;
        let c=`section${i+6}`;
        let a =`<a class="menu__link" id="${c}"  ></a>`;
        let li=document.createElement("li");
        li.setAttribute('class',`nav__item ${c}`);
        let li2=document.createElement("li");
        li2.setAttribute('class',`nav__item ${c}`);
        ul.appendChild(li);
        asul.appendChild(li2);
        let s = document.querySelector(`.${c}`);
        s.innerHTML=a;
        s = document.querySelector(`aside .${c}`);
        s.innerHTML=a;
      };
        let a =document.querySelector("#aside__list2 #section14");
        a.innerHTML = "اكسسوارات";
        a.setAttribute("href","../accessories/acess.html");
        a =document.querySelector("#aside__list2 #section13");
        a.innerHTML = "عطور رجالية ";    
        a.setAttribute("href","../male/male.html");
        a =document.querySelector("#aside__list2 #section12");
        a.innerHTML = " عطور نسائية ";  
        a.setAttribute("href","../femal/femal.html");
        a =document.querySelector("#aside__list2 #section11");
        a.innerHTML = "منتجات الحامل ";
        a.setAttribute("href","../pregnant/pregnant.html");
        a =document.querySelector("#aside__list2 #section10");
        a.innerHTML = "منتجات الشعر "; 
        a.setAttribute("href","../heir/heir.html");
        a =document.querySelector("#aside__list2 #section9");
        a.innerHTML = "منتجات القدم واليدين "; 
        a.setAttribute("href","../leg/leg.html");
        a =document.querySelector("#aside__list2 #section8");
        a.innerHTML = "منتجات الجسم "; 
        a.setAttribute("href","../body/body.html");
        a =document.querySelector("#aside__list2 #section7");
        a.innerHTML = "منتجات البشرة ";
        a.setAttribute("href", "../skin/skin.html");
        a =document.querySelector("#aside__list2 #section6");
        a.innerHTML = " make up ";
        a.setAttribute("href","../makeup/makeup.html");
      

      a =document.querySelector("#section14");
      a.innerHTML = "اكسسوارات";
      a.setAttribute("href","../accessories/acess.html");
      a =document.querySelector("#section13");
      a.innerHTML = "عطور رجالية ";    
      a.setAttribute("href","../male/male.html");
      a =document.querySelector("#section12");
      a.innerHTML = " عطور نسائية ";  
      a.setAttribute("href","../femal/femal.html");
      a =document.querySelector("#section11");
      a.innerHTML = "منتجات الحامل "; 
      a.setAttribute("href","../pregnant/pregnant.html");
      a =document.querySelector("#section10");
      a.innerHTML = "منتجات الشعر "; 
      a.setAttribute("href","../heir/heir.html");
      a =document.querySelector("#section9");
      a.innerHTML = "منتجات القدم واليدين ";
      a.setAttribute("href","../leg/leg.html"); 
      a =document.querySelector("#section8");
      a.innerHTML = "منتجات الجسم "; 
      a.setAttribute("href", "../body/body.html");
      a =document.querySelector("#section7");
      a.innerHTML = "منتجات البشرة ";
      a.setAttribute("href", "../skin/skin.html");
      a =document.querySelector("#section6");
      a.innerHTML = " make up ";
      a.setAttribute("href", "../makeup/makeup.html");
      
      let close2=document.createElement("button");
      close2.setAttribute("onclick",`show("#navbar__list")`);
      close2.innerHTML="X";
      asul=document.querySelector("aside");
      asul.appendChild(close2);
};
product();

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})


listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        let dev = document.querySelector(`#browsers${id_product}`);
        if (dev==null || dev==undefined){
            addToCart(id_product , "");

        }
        else{
            addToCart(id_product , dev.className);
        }
    }
})

const addToCart = (product_id ,value) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1,
            values: value
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1,
            values: value
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
        cart[positionThisProductInCart].values = value;
        
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

var valcolor=[];

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.id=`itemcard${item.product_id}`;
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            listCartHTML.appendChild(newItem);

            if(positionProduct > -1){
            newItem.innerHTML = `
                <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                    ${info.name}
                    </div>
                    <div class="totalPrice"><i class="fa-solid fa-shekel-sign fa-sm" style="color: #ffffff;"></i>  ${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus">-</span>
                        <span>${item.quantity}</span>
                        <span class="plus">+</span>
                    </div>
           `;
           if(item.values!="" && item.values !=null && item.values!=undefined){ 
            document.querySelector(`#itemcard${item.product_id} .name`).innerHTML=item.values;
           }
        }
        else totalQuantity = totalQuantity -  item.quantity;
    })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);;
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const addDataToHTML = () => {
    let col=localStorage.getItem("colr");
    if(col!=-1){
    document.getElementById(`section${col}`).style.color="#b69292";
    document.querySelector(`aside #section${col}`).style.color="#b69292"; 
    }
    let sect=[...(localStorage.getItem("sections").split(','))];
    if(products.length > 0){
        for(let j=0;j<sect.length;j+=1){
          i=sect[j];
          if(i!=null && i!=undefined && products[i]!=undefined){
            let itemdiv=`<div class="itemdiv">`;
            let product=products[i];
            let newProduct = document.createElement('div');
            
            newProduct.dataset.id = product.id;
            newProduct.classList.add('item');
            newProduct.setAttribute("id",`item${i}`);
            itemdiv= itemdiv + `\n<button class="colorhave${i}" >${product.color}</button>`;
            itemdiv+="\n</div>";
            
            newProduct.innerHTML = 
           `<a><img src="${product.image}" loading="lazy" alt="" id="img${product.id}" onclick= clickimg(${i},${product.id},${product.first},${product.lengths})></a>
             <h2 class="name">${product.name}</h2>
           
            <div class="price"><i class="fa-solid fa-shekel-sign fa-xs" style="color: #000000;"></i>${product.price}</div>
             ${itemdiv}
            <button class="addCart">Add To Cart</button>`;
           
            if(product.class2=="small"){
                newProduct.innerHTML = 
                `<a><img src="${product.image}" loading="lazy" alt="" id="img${product.id}" class="small"  onclick= clickimg(${i},${product.id},${product.first},${product.lengths})></a>
                <h2 class="write">${product.write}</h2>
                <h2 class="name">${product.name}</h2>
               
                <div class="price"><i class="fa-solid fa-shekel-sign fa-xs" style="color: #000000;"></i>${product.price}</div>
                 ${itemdiv}
                <button class="addCart">Add To Cart</button>`;
                newProduct.classList.add("write");
    
            }
            if(product.values!=undefined&&product.newval=="yes"){
                let val=`<div id="browsers${product.id}" class="${product.name}<br>" value="yes">`;
                product.values.forEach(value => {
                    val+= `<input type="checkbox" onclick=checkbox(${product.id},"${value}")  id="${product.id}${value}"/>
                    <label for="${product.id}${value}" >${value}</label>`
                                     
                })
                val+=`</div> `;
                newProduct.innerHTML = 
               `<a><img src="${product.image}" loading="lazy" alt="" id="img${product.id}" onclick= clickimg(${i},${product.id},${product.first},${product.lengths})></a>
                <h2>${product.name}</h2>
                <div class="price"><i class="fa-solid fa-shekel-sign fa-xs" style="color: #000000;"></i>${product.price}</div>
                 ${val}
                 ${itemdiv}
                 
                <button class="addCart" value="yes" >Add To Cart</button>`;
                newProduct.setAttribute("value","yes");
            }
            newProduct.classList.add(product.class);
            if(product.class2=="hidden2"){
                newProduct.classList.add(product.class2);
            }
            listProductHTML.appendChild(newProduct);
            newProduct = document.querySelector(`.listProduct .item .colorhave${i}`);
            newProduct.setAttribute("onclick",`changeImg( ${i}, "item${i}")`);
            }};
            if(typeof yes !== 'undefined' && yes=="yes"){
                addet();
            }
        }
    }

function checkbox (product_id , product_value){
    let dev = document.querySelector(`#browsers${product_id}`);
    let id=dev.className; 
    if(dev.className.includes(product_value)){
        id=id.replace(product_value,'');
    }
    else{ 
        id=dev.className +"   "+ product_value;
    }
    dev.setAttribute("class",`${id}`)
}

function changeImg(i ,id){
    next = products[i].next;
    document.getElementById(`${id}`).classList.toggle("hidden");
    document.getElementById(`${next}`).classList.toggle("hidden");
}

const clickimg = (i,product_id,first,len) =>{
    sessionStorage.setItem('array', JSON.stringify([i,product_id,first,len]));
    window.location.href='../show/show.html';
 }

 const initApp = () => {
    // get data product
    products=localStorage.getItem("checkbox")

    products=JSON.parse(products);
   
    if(products==[]||products==""){
    fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })}
    else{
        addDataToHTML();
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }

    }
}
initApp();