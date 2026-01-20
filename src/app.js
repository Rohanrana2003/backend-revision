const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Server is listening");
});

app.use("/new", (req, res) => {
  res.send("Server is listening at new leve");
});

app.listen(3000, () => {
  console.log("Server is running");
});
