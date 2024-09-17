const nav=document.querySelector(".navbar__menu");
const ul=document.getElementById("navbar__list");
let li1=document.querySelector(".main__hero .move ul li:nth-child(1)");
let li2=document.querySelector(".main__hero .move ul li:nth-child(2)");

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
    a.setAttribute("href","GigiApp.html");
    a =document.querySelector("#section3");
    a.innerHTML = `منتجاتنا `;  
    a.setAttribute("href","skinProduct/makeup/makeup.html")
    a =document.querySelector("#section2");
    a.innerHTML = "تعرف علينا ";  
    a.setAttribute("href","#Know");
    a =document.querySelector("#section1");
    a.innerHTML = "العروض "; 
    li2.classList.remove("active");
    li1.classList.add("active"); 
    
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
    if(d==0){
    mnue.style.display= "flex";
     d=1;}

    else{
      mnue.style.display= "none";
      d=0;
    }

  }

let img= document.querySelector("#change");
let imges=['https://ik.imagekit.io/cywqg5brs/images2/image1.png?updatedAt=1724326203943','https://ik.imagekit.io/cywqg5brs/images2/image2.png?updatedAt=1724326227414'];

let random=0;

setInterval(function(){
img.style.backgroundImage = `url(${imges[random]})`;
if(random==1){
  li2.classList.remove("active");
  li1.classList.add("active");
}
if(random==0){
  li1.classList.remove("active");
  li2.classList.add("active");

}
random++; 
if(random >=2){
  random=0;
 }
},3000);
