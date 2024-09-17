const nav=document.querySelector(".navbar__menu");
const ul=document.getElementById("navbar__list");

const navbar= ()=>{
  let close=document.createElement("button");
    close.innerHTML="X";
    close.setAttribute("onclick",`show("#navbar__list")`);
    close.classList.add("off");
    ul.appendChild(close);
    for(let i=1;i<5;i++){
    let n=`Section ${i}`;
    let c=`section${i}`;
    let a =`<a class="menu__link" id="${c}" href="#${c}" ></a>`;
    let li=document.createElement("li");
    li.setAttribute('class',`nav__item ${c}`);
    ul.appendChild(li);
    let s = document.querySelector(`.${c}`);
    s.innerHTML=a;
    };
    let a =document.querySelector("#section4");
    a.innerHTML = "الرئيسية";
    a.setAttribute("href","../GigiApp.html");
    a =document.querySelector("#section3");
    a.innerHTML = `منتجاتنا `;  
    a.setAttribute("href","../skinProduct/makeup/makeup.html")
    a =document.querySelector("#section2");
    a.innerHTML = "تعرف علينا ";  
    a.setAttribute("href","");
    a =document.querySelector("#section1");
    a.innerHTML = "العروض "; 
  };
  
  navbar();

  const minue=()=>{
    let button =document.createElement("button");
    button.setAttribute("class","menu__link");
    button.setAttribute("id","minue");
    button.setAttribute("onclick", `show("#navbar__list")`);
    button.innerHTML=`<img src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg " width="40px" height="40px">`
    const navbar_menu = document.querySelector(".navbar__menu");
    navbar_menu.insertAdjacentElement("afterbegin",button);
  }
  minue();  let d=0;
function show(str){
    let mnue=document.querySelector(str);
    console.log(mnue);console.log(d);
    if(d==0){
    mnue.style.display= "flex";
     d=1;}

    else{
      mnue.style.display= "none";
      d=0;
    }

  }