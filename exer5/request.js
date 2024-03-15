import needle from "needle";

needle.post(
  "http://localhost:3000/add-book",
  {
    bookName: "Harry Potter and the Chamber of Secrets",
    isbn: "0-7475-3849-2",
    author: "J.K Rowling",
    yearPublished: "",
  },
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  }
);

needle.get(
  "http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling",
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  }
);

needle.get(
  "http://localhost:3000/find-by-author?author=J.K+Rowling",
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res.body);
  }
);