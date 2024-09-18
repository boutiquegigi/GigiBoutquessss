let sect=[];
let products = [];

function adding(){
    if(localStorage.getItem("checkbox")==null){
        localStorage.setItem('checkbox', JSON.stringify([]));
        fetch('../../products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            console.log(products)
            localStorage.setItem('checkbox', JSON.stringify(data));
        })
    }
    else{
        products=localStorage.getItem("checkbox")
        products=JSON.parse(products);
        console.log(products)
    }
    sec()
}
adding();

function sec(){
console.log(products)
products.forEach(prod=>{
    if(prod.section=="body"){
        sect.push(prod.count);
    }
    console.log(sect)
})
localStorage.setItem('sections',sect);
localStorage.setItem('colr',6);
localStorage.setItem('section',"makeup");
}