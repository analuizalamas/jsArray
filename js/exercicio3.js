const products = require("./module.js");

//1. Adicione um ID exclusivo a cada produto começando em 1.
products.forEach((element, index) => {
  element.id = index + 1;
});

//2. Imprima o nome de cada um dos produtos no console.
for (let index = 0; index < products.length; index++) {
  let elementoAtual = products[index];

  console.log(elementoAtual.name);
}

//3. Imprima no console o produto com o id 3.
const id3 = products.filter((element) => {
  return element.id == 3;
});
console.log(id3);

//4. Imprima no console os produtos com a cor “black”.

const blackProducts = products.filter(function (element) {
  return element.colors.includes("black");
});
console.log(blackProducts);

//5. Imprima no console os produtos que não possuem cor.
 const withoutColor = products.filter((element) => {
    return element.colors.length == 0
});
console.log(withoutColor)
