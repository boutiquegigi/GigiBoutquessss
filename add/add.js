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
let clear=document.querySelector("#clear")
//get prodctus array from json
clear.addEventListener("click", (e)=>{
    localStorage.setItem('checkbox', JSON.stringify([]));
    fetch('https://maisserhan.github.io/GigiBoutquessss/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        console.log(data)
        localStorage.setItem('checkbox', JSON.stringify(data));
    })
})

const initApp = () => {
    if(localStorage.getItem("checkbox")==null){
        localStorage.setItem('checkbox', JSON.stringify([]));
        fetch('https://maisserhan.github.io/GigiBoutquessss/products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            localStorage.setItem('checkbox', JSON.stringify(data));
        })
    }
    else{
        products=localStorage.getItem("checkbox")
        products=JSON.parse(products);
    }

}
initApp();

//section input
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

//name product input
names.addEventListener("input", (e)=>{
    newprod.name=e.target.value;
})

//price product input
price.addEventListener("input", (e)=>{
    newprod.price=e.target.value;
})

//lengths product input
lengths.addEventListener("input", (e) =>{
    value = e.target.value;
    newprod.lengths =value;
    let nexts=[], arrpod=[];
    nexts = findcount(value, newprod, nexts);
    console.log("nexts",nexts, newprod)
    arrpod = findcpoyprod(value, newprod, nexts, arrpod);
    console.log("aarrpod", arrpod)
    image.innerHTML="";
    let elemimag=``;
    elemimag = addcart(elemimag, value);
    image.innerHTML=elemimag;
    arrpod = addSorcimage (value, arrpod);
    
    arrpod = descriptions(value, arrpod);
    arrpod = productimgs(value, arrpod);
    arrpod = writes(value, arrpod);console.log("aarrpod", arrpod)

    for(let i=0;i<arrpod.length;i++){
        products[products.findIndex((values) =>( values.id==undefined ))]=(arrpod[i])
    }
});


//functions

//findcount
function findcount(value, newprod, nexts){
    for(let i=1;i<=value;i++){
        let sum=newprod.count+i;
        if(i==value){
            nexts.push("item"+newprod.count);
        }
        else{nexts.push("item"+sum);}
    }
    console.log("nexts",nexts)
    return nexts;
}

//findcpoyprod
function findcpoyprod(value, newprod, nexts, arrpod){
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
    console.log("arrpod",arrpod)
    return arrpod;
}

//addcart
function addcart(elemimag, value){
    for(let i=0;i<value;i++){
        elemimag += `<div class="cart${i} proimg"><label for="input-file${i}" id="labelinput${i}"><img src="" id="productimg${i}">${i+1} صورة المنتج </label>
        <input type="url" class="input-file" id="input-file${i}"  placeholder="URL" required>
        <input type="text" id="description${i}" class="description"  placeholder="ادخل كلمة للزر التفاصيل المنتج" required/>
        <input type="number" id="colnum${i}" class="colnum"  placeholder="${i+1} عدد الوان صورة المنتج " />
        <div class="divcol${i} divcols">
        </div>
         </div>
        `
    }
    elemimag += `<textarea id="write" class="write" rows="4" cols="50" placeholder="  تفاصيل المنتج كبيرة يتم التعبئة غير ذلك يترك فارغ"></textarea>
        </div>`
    console.log("elemimag", elemimag)
    return elemimag;
}

//addSorcimage
function addSorcimage (value, arrpod){
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
      }
    }
    return arrpod;
}

//description
function descriptions(value, arrpod){
    for(let i=0;i<value;i++){
        let delesection=document.querySelector(`#description${i}`);
        delesection.addEventListener("input" , (e)=>{
        arrpod[i].color=e.target.value;
      })
    }
    return arrpod;
}

//productimgs
function productimgs(value, arrpod){
    let productimg=[];
    for(let i=0;i<value;i++){
        
        let colnum=[];let divcol=[];
        colnum[i]=document.querySelector(`#colnum${i}`)
        divcol[i]=document.querySelector(`.divcol${i}`)
        colnum[i].addEventListener("input", e =>{
           if(e.target.value>0){
            arrpod[i].newval="yes";
           }
           else{
            arrpod[i].newval="";
           }
           let elemcolr=``;
           for(let j=0;j<e.target.value;j++){
            elemcolr+=`<input type="text" id="col${i}${j}" class="col"  placeholder="${j+1}  لون المنتج " />`
           }
           divcol[i].innerHTML=elemcolr;
           let prodco=[];
           for(let j=0;j<e.target.value;j++){
                let col = document.querySelector(`#col${i}${j}`);
                col.addEventListener("input",e =>{
                prodco[j]=e.target.value;
                })
            }
            productimg[i]=prodco;
            arrpod[i].values=productimg[i];
            console.log(products)
      })
    }
    return arrpod;
}

//writes
function writes(value, arrpod){

    let write=document.querySelector(`#write`);console.log(write)
    write.addEventListener("input" , (e)=>{
        if(e.target.value!=null && e.target.value!=undefined && e.target.value != "" && e.target.value !=" "){
            arrpod[value]={ ...arrpod[value-1]};
            arrpod[value].count=(arrpod[value].count)+1;
            arrpod[value-1].next="item"+arrpod[value].count;
            arrpod[value].next="item"+arrpod[0].count
            let leng=arrpod.length;
            arrpod[value].write=e.target.value;
            arrpod[value].class="hidden";
            arrpod[value].class2= "small";
            if(arrpod[value].newval="yes">0){
                arrpod[value].newval="";
               }
            arrpod[value].values=[];
            arrpod[value].id=arrpod[0].id;
            for(let i=0;i<=value;i++){
                arrpod[i].lengths=leng;
            }
            let ind=-1;
            products.forEach(values =>{
                if(values.count==arrpod[value].count)
                    ind=values.count;
            })
           if(ind==-1  || ind==undefined){
            products[products.findIndex((values) =>( values.id==undefined))]=(arrpod[value])
           }
           else{
            products[ind]=(arrpod[value])
           }
           console.log(products)

        }
        else{
          let ind=-1;
            products.forEach(values =>{
                if(values.count==arrpod[value].count)
                    ind=values.count;
                products[ind]={};
            })
           if(ind==-1  || ind==undefined){
            products[products.findIndex((values) =>( values.id==undefined))]=(arrpod[value])
           }
           console.log(products)
        }
  })
  return arrpod
}

//copy text
let text=document.querySelector(".text .here");
 text.onclick = function() {
      document.execCommand("copy");
    }
text.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        let cop=JSON.stringify(products);
        cop=cop.replaceAll(",",",\n")
        cop=cop.replaceAll("{","\n{")
        event.clipboardData.setData("text/plain", cop);
        console.log(event.clipboardData.getData("text"));
        alert("you copy the text!!");
    }
});
form.addEventListener("submit", (e)=>{
    if(localStorage.getItem('checkbox')==""){
        localStorage.setItem('checkbox', JSON.stringify(products))  
        } 
    else addCartToMemory();
})
const addCartToMemory = () => {
    localStorage.setItem('checkbox', JSON.stringify(products));
}


//for delete product
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
