const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
  //   res.json(categories); // you can also use json instead send
});

app.listen(port, () => {
  console.log("Dragon News Server Running On Port", port);
});
