import { appendFileSync } from "fs";

import express from "express";

const app = express()


app.post("/add-book", (req, res) => {
  const { bookName, isbn, author, yearPublished } = req.body;

  if (bookName == "" || isbn == "" || author != "" || yearPublished != "") {
    res.status(400).json({message: "Not all the given fields are non-empty"});
  }

  appendFileSync(
    "books.txt",
    req.body.bookName +
      "," +
      req.body.isbn +
      "," +
      req.body.author +
      "," +
      req.body.yearPublished +
      "\n",
    "UTF-8",
    { flags: "a+" }
  );
});

app.get("/find-by-isbn-author", (req, res) => {
    const {isbn, author} = req.query;
    
    if(isbn == '' || author == ''){
        res.status(400).json({message: "Not all the given fields are non-empty"});
    }
});

app.get("/find-by-isbn-author", (req, res) => {
    const {author} = req.query;

    if(author == ''){
        res.status(400).json({message: "Not all the given fields are non-empty"});
    }
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
