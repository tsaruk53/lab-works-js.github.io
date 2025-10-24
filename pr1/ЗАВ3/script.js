const employees = [
  { name: "Андрій", position: "Менеджер", salary: 20000, years: 5 },
  { name: "Оксана", position: "Програміст", salary: 35000, years: 3 },
  { name: "Ігор", position: "Дизайнер", salary: 25000, years: 6 },
  { name: "Марія", position: "Аналітик", salary: 30000, years: 4 }
];
function getAverageSalary(){
    const total = employees.reduce((sum, e) => sum + e.salary, 0);
    return total / employees.length
}
function findMostExperiencedEmployee(){
    return employees.reduce((max, e) => e.years > max.years ? e : max);
}
console.log("Завдання 3:");
console.log("Середня зарплата:", getAverageSalary());
console.log("Найдосвідченіший працівник:", findMostExperiencedEmployee());