const express = require("express");
const connectToDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firtName: "Rohan",
    lastName: "Rana",
    emailId: "Rohan@gmail.com",
    password: "rohanrohan",
  });

  await user.save();

  res.send("User Created Successfully!");
});

connectToDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected!!");
  });
