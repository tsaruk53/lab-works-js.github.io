const products = [
  { name: "Ноутбук", category: "Електроніка", price: 25000, inStock: 3 },
  { name: "Мишка", category: "Електроніка", price: 700, inStock: 0 },
  { name: "Стіл", category: "Меблі", price: 3000, inStock: 5 },
  { name: "Стілець", category: "Меблі", price: 1200, inStock: 0 }
];
function getAvailableProducts(){
    return products.filter(product => product.inStock > 0);
}
function findProductByName(name){
    const found = products.find(product => product.name === name);
    return found || "Товар не знайдено"; 
}
console.log("Завдання 1:");
console.log("Товари в наявності:", getAvailableProducts());
const name = prompt("Введіть назву товару для пошуку:");
console.log("Результат пошуку:", findProductByName(name));