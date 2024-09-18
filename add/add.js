let lengths=document.querySelector(`#lengths`);
let image=document.querySelector(`.image`);
let names=document.querySelector(`#name`);
let value=0;
var products = [];
var index=0;
let form=document.querySelector(`form#custom_form`);
let section=document.querySelector(`#section`);
let result=[];
let price=document.querySelector(`#price`);
let description=document.querySelector(`#description`);
let newprod= {};
let arrpod= [];
let s=[]

section.addEventListener("input", (e)=>{
    index=products.findIndex((values) =>(values!=undefined&& values.id==undefined));
    newprod.count=index;
    if(index==-1){
        index=products.length;
        products[products.length]={};
    }
    if(index>0){
        newprod.id=(products[index-1].id)+1;
    }
    else{
        newprod.id=index+1;
    }
    let option=document.querySelector(`option[value="${e.target.value}"]`);
    newprod.section=`${option.id}`;
})
names.addEventListener("input", (e)=>{
    newprod.name=e.target.value;
})

price.addEventListener("input", (e)=>{
    newprod.price=e.target.value;
})

description.addEventListener("input" , (e)=>{
    newprod.color=e.target.value;
})

lengths.addEventListener("input", (e) =>{
    newprod.lengths = e.target.value;
    value = e.target.value;
    let nexts=[], arrpod=[];
    for(let i=1;i<=value;i++){
        let sum=newprod.count+i;
        if(i==value){
            nexts.push("item"+newprod.count);
        }
        else{nexts.push("item"+sum);}
    }
    for(let i=0;i<value;i++){
        const cpoyprod = { ...newprod};
        cpoyprod.first=cpoyprod.count;
        cpoyprod.count=cpoyprod.count+i;
        cpoyprod.id=cpoyprod.id+i;
        cpoyprod.next=nexts[i];
        if(i==0){
            cpoyprod.class="show"
        }
        else{
            cpoyprod.class="hidden"
        }
        arrpod.push(cpoyprod);
    }
    image.innerHTML="";
    let elemimag=``;
    for(let i=0;i<value;i++){
        elemimag += `<div class="cart${i}"><label for="input-file${i}" id="labelinput${i}"><img src="" id="productimg${i}">صورة المنتج</label>
        <input type="url" class="input-file" id="input-file${i}"  placeholder="URL" required></div>`
    }
    image.innerHTML=elemimag;

    for(let i=0;i<value;i++){
      let productimg=[];
      productimg[i]=document.querySelector(`#productimg${i}`);
      let inputFile=document.querySelector(`#input-file${i}`);
      inputFile.onchange = function(){
        productimg[i].src = (inputFile.value);
        productimg[i].style.display="block";
        productimg[i].style.width="100px";
        productimg[i].style.height="100px";
        arrpod[i].image=productimg[i].src;
        products[products.findIndex((values) =>( values.id==undefined ))]=(arrpod[i])
        console.log(products)

      }
    }
    console.log(products)
});

form.addEventListener("submit", (e)=>{
    console.log(products)
    if(localStorage.getItem('checkbox')==""){
        localStorage.setItem('checkbox', JSON.stringify(products))  
        } 
    else addCartToMemory();
})

const addCartToMemory = () => {
    localStorage.setItem('checkbox', JSON.stringify(products));
}


const initApp = () => {
    products=localStorage.getItem("checkbox");
    products=JSON.parse(products);
    console.log(localStorage.getItem("checkbox"),products,products==null);

    if(products==[]||products==""||products==null){
    fetch('../products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(products)
    })
}
}
initApp();
form.addEventListener("submit",e =>{
    window.onload = arrpod;
})


section=document.querySelector(`#section2`);
let delesection="";
let index2=0;
section.addEventListener("input", (e)=>{
    let option=document.querySelector(`option[value="${e.target.value}"]`);
    delesection=`${option.id}`;
})

let len=0;
names=document.querySelector(`#name2`);
names.addEventListener("input", (e)=>{
    index2=products.findIndex((values) =>( (values.name==e.target.value) && (values.section==delesection))  );
    len= products[index2].lengths;
    for(let i=0;i<len;i++){
        products[index2+i]={};
    }
})

form =document.querySelector(`form#del_custom_form`);
form.addEventListener("submit", (e)=>{
    if(JSON.parse(localStorage.getItem('checkbox'))==""){
        localStorage.setItem('checkbox', JSON.stringify(products))  
    } 
    else addCartToMemory();
})