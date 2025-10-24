const students = [
  { name: "Іван", age: 20, grade: 90, group: "A" },
  { name: "Оля", age: 19, grade: 85, group: "A" },
  { name: "Максим", age: 21, grade: 75, group: "B" },
  { name: "Катя", age: 20, grade: 95, group: "B" }
];
function groupBy(students) {
  return students.reduce((groups, student) => {
    if (!groups[student.group]) {
      groups[student.group] = [];
    }
    groups[student.group].push(student);
    return groups;
  }, {});
}
function sortStudentsByGrade(students){
  return [...students].sort((a,b) => b.grade - a.grade);
}
console.log("Завдання 2:");
console.log("Групування за групами:", groupBy(students));
console.log("Сортування за оцінками:", sortStudentsByGrade(students));