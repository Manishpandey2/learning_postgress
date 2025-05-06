const express = require("express");
const { book } = require("./database/connection.js");
const app = express();

app.use(express.json());
require("./database/connection.js");
app.get("/books", async (req, res) => {
  const books = await book.findAll();

  if (books.length === 0) {
    return res.status(404).json({ message: "No books found" });
  }

  res.json({
    message: "list of books is here",
    books: books,
  });
});

app.post("/books", async (req, res) => {
  console.log(req.body);
  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res.status(400).json({ message: "All fields are required" });
  }
  await book.create({
    title,
    author,
    genre,
  });
  res.json({
    message: "book added successfully",
  });
});

app.patch("/books/:id", (req, res) => {
  res.json({
    message: `book with id ${req.params.id} updated successfully`,
  });
});

app.delete("/books/:id", (req, res) => {
  res.json({
    message: `book with id ${req.params.id} deleted successfully`,
  });
});
app.get("/books/:id", (req, res) => {
  res.json({
    message: `book with id ${req.params.id} is here`,
  });
});
app.get("/books/:id/reviews", (req, res) => {
  res.json({
    message: `reviews for book with id ${req.params.id} are here`,
  });
});

app.get("/books/:id/comments", (req, res) => {
  res.json({
    message: `comments for book with id ${req.params.id} are here`,
  });
});
app.get("/books/:id/ratings", (req, res) => {
  res.json({
    message: `ratings for book with id ${req.params.id} are here`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
