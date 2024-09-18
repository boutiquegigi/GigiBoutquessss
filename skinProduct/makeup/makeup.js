let sect=[];
let products = [];

console.log(products,products==null,products==[],products=="")
if(products==[]||products==""||products==null){
    fetch('../../products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
       // localStorage.setItem("checkbox",products)
        console.log(products)
        sec()
    })
}
/*else{
   products=localStorage.getItem("checkbox")
   products=JSON.parse(products); 
}*/
function sec(){
console.log(products)
products.forEach(prod=>{
    if(prod.section=="makeup"){
        sect.push(prod.count);
    }
    console.log(sect)
})
localStorage.setItem('sections',sect);
localStorage.setItem('colr',6);
localStorage.setItem('section',"makeup");
}