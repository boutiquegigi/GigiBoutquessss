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
 
products.forEach(prod=>{
    if(prod.section=="leg"){
        sect.push(prod.count);
    }
})
localStorage.setItem('sections',sect);
localStorage.setItem('colr',9);
localStorage.setItem('section',"leg");
