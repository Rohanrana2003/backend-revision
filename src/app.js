const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

// app.use("/users", userAuth);

app.get("/users/getAllUsers", userAuth, (req, res) => {
  res.send("Here my Data");
});

app.listen(3000, () => {
  console.log("Server is running");
});
