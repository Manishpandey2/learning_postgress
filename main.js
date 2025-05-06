const express = require("express");
const app = express();

require("./database/connection.js");
app.get("/books", (req, res) => {
  res.json({
    message: "list of books is here",
  });
});

app.post("/books", (req, res) => {
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
