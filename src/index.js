const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
// console.log(__dirname);
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const PartialsPath = path.join(__dirname, "../templates/partials");
// to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(PartialsPath);
// app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.send("hello from the exprs");
});

app.get("/about", (req, res) => {
  res.send("Hello fromt the About page");
});

app.listen(8000, () => {
  console.log("listening at port 8000");
});

// API
// get
// post
// put
// delete
