require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.listen(port, function () {
  console.log(`app is running on port number ${port}`);
});

app.get("/", function (request, response) {
  response.send("Welcome to chai code");
});

app.get("/login", (req, res) => {
  res.send("welcome to login page");
});
