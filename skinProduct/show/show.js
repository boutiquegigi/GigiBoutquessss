var sessionString = sessionStorage.getItem('array');
var pageArray =  JSON.parse(sessionString);
let tit=document.querySelector("title");
let i=pageArray[0];
let id=pageArray[1];
let first=pageArray[2];
let len=pageArray[3];
let yes="yes";
var srcs=[];
let sect=[];

products=localStorage.getItem("checkbox")
products=JSON.parse(products);
if(products==[]||products==""){
    fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
    })
}
function getsec(){
    for(let i=first;i<first+len;i++){
        sect.push(i);
    }
}
getsec();
localStorage.setItem('sections',sect);
localStorage.setItem('colr',-1);


if(document.querySelector(`.colorhave${i}`)!=null)
document.querySelector(`.colorhave${i}`).classList.add("hidden");


function addet(){
  let element=document.querySelectorAll(`.container .listProduct div.item`);
  element.forEach(items =>{
    let news=document.createElement("div");
    let bool="";
    news.setAttribute("class","imgs"); 
    element.forEach(itemImg => {
        bool="";
        let img=document.createElement("img");
        let imgIn=document.querySelector(`.container .listProduct div#${itemImg.id} img`)
        img.setAttribute("src",imgIn.src);
        img.setAttribute("loading","lazy");
        img.setAttribute("id",`img${itemImg.id}`);
        img.setAttribute("onclick", `showImag(  ${itemImg.id.substring(4)}, "item${itemImg.id.substring(4)}")`);
        imgIn.setAttribute("onclick",`changeImg( ${itemImg.id.substring(4)}, "item${itemImg.id.substring(4)}")`);
        
        if(itemImg.classList.contains("write")){
            bool="write";
        }
        if(bool!="write"){
           news.appendChild(img);
        } 
    });
    items.appendChild(news);
  })
  tit.innerText=document.querySelector(`#item${first} .name` ).innerText;
}

function showImag(i ,id){
    for(let i=first;i<len+first;i++){
        if(!document.getElementById(`item${i}`).classList.contains("hidden")){
        document.getElementById(`item${i}`).classList.add("hidden");
        }
 
    }
    document.getElementById(`${id}`).classList.toggle("hidden");
}
    