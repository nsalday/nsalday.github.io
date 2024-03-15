import needle from "needle";

// Adds the given book
needle.post(
  "http://localhost:3000/add-book", // URL that holds book list
  // Sample book details
  {
    bookName: "Harry Potter and the Chamber of Secrets",
    isbn: "0-7475-3849-2",
    author: "J.K Rowling",
    yearPublished: "",
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