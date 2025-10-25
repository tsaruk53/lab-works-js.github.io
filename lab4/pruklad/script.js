let book = {
    title: "Harry Potter and the Sorcerers Stone",
    author: "K.K Rowling",
    year: 1997,
    isRead: true,
    bookInfo(){
        console.log(`Назва ${this.title}, Автор ${this.author}, Рік видання ${this.year}, Прочитана ${this.isRead ? "Так" : "Ні"}`)
    },
    markAsRead(){
        this.isRead = true;
        console.log(`Назва: "${this.title}" позначено як прочитану.`);
    }
};
book.bookInfo()

book.isRead =!book.isRead;
book.bookInfo();


let library =[
    {title: "Harry Potter and the Sorcerers Stone", author: "K.K Rowling", year: 1997, isRead: true},
    {title: "The Hobbit", author: "J.R.R Tolkien", year: 1937, isRead: false},
    {title: "1984", author: "George Orwell", year: 1949, isRead: true}
];

function displayLibrary(){
    library.forEach(book => {
        console.log(`Назва: ${book.title}, Автор: ${book.author}, Рік видання: ${book.year}, Прочитана: ${book.isRead ? "Так" : "Ні"}`);
    });
}
displayLibrary();
library.push({title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false});
displayLibrary();


let unreadBooks = library.filter(book => !book.isRead);
console.log("Непрочитані книги ", unreadBooks);
let tolkienBook = library.find(book => book.author === "J.R.R Tolkien");
console.log("Книга Толкіна ", tolkienBook);

function addBookToLibrary(){
    let title = prompt("Введіть назву книги: ");
    let author = prompt("Введіть автора: ");
    let year = +prompt("Введіть рік: ");
    let isRead = confirm("Чи прочитана книга? ");
    library.push({title, author, year, isRead});
    displayLibrary();
}
addBookToLibrary();

library.sort((a,b) => a.year - b.year);
console.log("Відсортовані книги за роком видання ", library);

function calculateAverageYear(){
    let total = library.reduce((sum, book) => sum + book.year, 0);
    let avg = total/library.length;
    console.log("Середній рік видання книг: ", avg);
    return avg;
}

calculateAverageYear();


