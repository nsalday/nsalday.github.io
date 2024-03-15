/*
  Name: Neil Vincent S. Alday
  Section: UV3L
  Exercise 5: Web Server with Express JS
  Server File
*/

// fs for reading and writing files. express for express
import { appendFileSync, readFileSync } from "fs";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This function is used to read books from a given file in order to be used in filtering
function readBooksFromFile() {
  const data = readFileSync("books.txt", "utf-8"); // read books.txt
  const lines = data.split("\n");
  const books = [];

  //Push book details to books list 
  for (const line of lines) {
    const [bookName, isbn, author, yearPublished] = line.split(",");
    books.push({ bookName, isbn, author, yearPublished });
  }
  return books; //return books
}

// Adds a book
app.post("/add-book", (req, res) => {
  const { bookName, isbn, author, yearPublished } = req.body;

  // Check if all required fields are present. 
  if (!bookName || !isbn || !author || !yearPublished) {
    return res.json({ success: false }); // If not, return success is false meaning the book will not be added
  }

  // Write book details to books
  appendFileSync(
    "books.txt",
    '${bookName},${isbn},${author},${yearPublished}\n',
    "UTF-8",
    { flags: "a+" }
  );

  return res.json({ success: true });
});

// Finds a book by isbn and author
app.get("/find-by-isbn-author", (req, res) => {
  const { isbn, author } = req.query;

  // Check if ISBN and Author fields are empty, if they are return nothing
  if (!isbn || !author) {
    res
      .status(400)
      .json({ message: "ISBN and Author fields are empty" });
    return;
  }

  const books = readBooksFromFile(); // Read books' details from books.txt
  const matchingBooks = books.filter( // Find any matching books based from the given author and isbn
    (book) => book.isbn === isbn && book.author === author
  );

  // If book doesn't exist, prompt that it doesn't
  if (matchingBooks.length === 0) {
    res.status(404).json({ message: "Book does not exist." });
    return;
  }

  res.json(matchingBooks); // Print
});

// Find books from the given author
app.get("/find-by-author", (req, res) => {
  const { author } = req.query;

  // If the author field doesn't exist, alert the user that it doesn't
  if (!author) {
    res.status(400).json({ message: "Author field is empty!" });
    return;
  }


  const books = readBooksFromFile(); // Read books from books.txt
  const matchingBooks = books.filter((book) => book.author === author); // Find matching books based from the given author

  // If there are no books found, alert the user
  if (matchingBooks.length === 0) {
    res.status(404).json({ message: "No books found made by the author." });
    return;
  }

  res.json(matchingBooks); // Print
});

// This tells our server to listen to port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
