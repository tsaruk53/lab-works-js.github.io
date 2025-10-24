const books = [
  { title: "Book A", author: "Author1", year: 2010, rating: 5, isRead: true },
  { title: "Book B", author: "Author1", year: 2015, rating: 3, isRead: false },
  { title: "Book C", author: "Author2", year: 2020, rating: 4.5, isRead: false }
];
function getUnreadBooks() {
  return books.reduce((unread, book) => {
    if (!book.isRead) unread.push(book.title);
    return unread;
  }, []);
}
function getBooksByAuthor(authorName) {
  const byAuthor = books.reduce((list, book) => {
    if (book.author === authorName) list.push(book);
    return list;
  }, []);
  return byAuthor.sort((a, b) => a.year - b.year);
}
function getTopRatedBooks() {
  const top = books.reduce((best, book) => {
    if (book.rating > 4) best.push(book);
    return best;
  }, []);
  return top.sort((a, b) => b.rating - a.rating);
}
console.log("Завдання 4:");
console.log("Непрочитані книги:", getUnreadBooks());
console.log("Книги автора Author1:", getBooksByAuthor("Author1"));
console.log("Книги з високим рейтингом:", getTopRatedBooks());
