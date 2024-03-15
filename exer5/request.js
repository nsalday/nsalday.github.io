/*
  Name: Neil Vincent S. Alday
  Section: UV3L
  Exercise 5: Web Server with Express JS
  Request File
*/

import needle from "needle";

// Adds the given book
needle.post(
  "http://localhost:3000/add-book", // URL that holds book list
  // Sample book details
  {
    bookName: "The Little Prince",
    isbn: "978-0156012195",
    author: "Antoine Saint-Exupery",
    yearPublished: "1943",
  }, // Error catcher
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  }
);

// Filters books by author and ISBN
needle.get(
  "http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling", // URL that holds the filtered books
  // Error catcher
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  }
);

// Filters books by author
needle.get(
  "http://localhost:3000/find-by-author?author=J.K+Rowling", // URL that holds the filtered books
  // Error catcher
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  }
);