const products = require("./module");

//1. Adicione um novo produto ao array com as mesmas propriedades dos produtos existentes.
products.push ({ name: "WebCam", price: 200, quantity: 10, colors: ['black','white', 'pink'] })
console.log(products)

//2. Remova os produtos fora de estoque da matriz.
products.pop();
console.log(products);

//3. Imprima no console a soma do estoque de todos os produtos.
let inventory = 0;
products.forEach((element) => {
    inventory = inventory + element.quantity;
});
console.log(inventory)

//4. Imprima produtos com preço superior a um determinado valor.
products.forEach((element) => {
    if (element.price >900 ){
        console.log(element.price)
    }
});

//5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.
products.forEach((element) =>{
    let lowerCaseName = element.name.toLowerCase()
    if (lowerCaseName.includes("o")){
        console.log(element.name)
    }
});