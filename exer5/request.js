needle.post(
    {bookName: "Cookingn't?!",
    isbn: "20",
    author: "Neil Alday",
    yearPublished: "03-15-2024"
    },
    (err, res) => {
        console.log(res.body);
    }
)

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', (err, res) => {
    console.log(res.body);
});

needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
    console.log(res.body);
});