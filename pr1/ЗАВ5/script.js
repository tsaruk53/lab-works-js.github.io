const orders = [
  { 
    orderId: 1, 
    customer: { name: "Оля", email: "olya@gmail.com" }, 
    items: ["Мишка", "Клавіатура"], 
    total: 1200 
  },
  { 
    orderId: 2, 
    customer: { name: "Іван", email: "ivan@gmail.com" }, 
    items: ["Монітор"], 
    total: 5000 
  },
  { 
    orderId: 3, 
    customer: { name: "Оля", email: "olya@gmail.com" }, 
    items: ["Навушники"], 
    total: 800 
  }
];
function getTotalSpentByCustomer(orders, customerName) {
  const customerOrders = orders.filter(order => order.customer.name === customerName);
  const totalSpent = customerOrders.reduce((sum, order) => sum + order.total, 0);
  return totalSpent;
}
console.log("Завдання 5:");
console.log("Оля витратила:", getTotalSpentByCustomer(orders, "Оля"));
console.log("Іван витратив:", getTotalSpentByCustomer(orders, "Іван"));