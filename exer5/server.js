import { appendFileSync, readFileSync } from "fs";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function readBooksFromFile() {
  const data = readFileSync("books.txt", "utf-8");
  const lines = data.split("\n");
  const books = [];
  for (const line of lines) {
    const [bookName, isbn, author, yearPublished] = line.split(",");
    books.push({ bookName, isbn, author, yearPublished });
  }
  return books;
}

app.post("/add-book", (req, res) => {
  const { bookName, isbn, author, yearPublished } = req.body;

  if (!bookName || !isbn || !author || !yearPublished) {
    return res.json({ success: false });
  }

  appendFileSync(
    "books.txt",
    `${bookName},${isbn},${author},${yearPublished}\n`,
    "UTF-8",
    { flags: "a+" }
  );

  return res.json({ success: true });
});

app.get("/find-by-isbn-author", (req, res) => {
  const { isbn, author } = req.query;

  if (!isbn || !author) {
    res
      .status(400)
      .json({ message: "ISBN and Author parameters are required." });
    return;
  }

  const books = readBooksFromFile();
  const matchingBooks = books.filter(
    (book) => book.isbn === isbn && book.author === author
  );

  if (matchingBooks.length === 0) {
    res.status(404).json({ message: "Book not found." });
    return;
  }

  res.json(matchingBooks);
});

app.get("/find-by-author", (req, res) => {
  const { author } = req.query;

  if (!author) {
    res.status(400).json({ message: "Author input is required." });
    return;
  }

  const books = readBooksFromFile();
  const matchingBooks = books.filter((book) => book.author === author);

  if (matchingBooks.length === 0) {
    res.status(404).json({ message: "No books found by the author." });
    return;
  }

  res.json(matchingBooks);
});

// This tells our server to listen to port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
