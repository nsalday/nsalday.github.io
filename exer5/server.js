import express from "express";

// instantiate the server
const app = express();

// this tells our app to listen for GET messages on the '/' path
// the callback function specifies what the server will do when a message is received
app.post("/add-book", (req, res) => {
    const {bookName, isbn, author, yearPublished} = req.body;

    if (bookName != '' && isbn != '' && author != '' && yearPublished != ''){
        //save data
    }
});

app.get("/find-by-isbn-author", (req, res) => {
    res.send('Hello ' + req.query.name)
});

app.get("/find-by-isbn-author", (req, res) => {
    
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
