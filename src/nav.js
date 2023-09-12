const express = require("express");
const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("Welcome to the About page");
});
app.get("/contact", (req, res) => {
  res.send("Welcome to the Contact page");
});
app.get("/temp", (req, res) => {
  res.send("Welcome to the Temp page");
});

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
