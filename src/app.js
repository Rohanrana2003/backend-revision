const express = require("express");
const connectToDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

// Signup API
app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Created Successfully!");
  } catch (err) {
    res.status(400).send("Error in Saving the user:" + err.message);
  }
});

// GET users by EmailId API
app.get("/userbyId", async (req, res) => {
  const EmailId = req.body.emailId;

  try {
    const users = await User.find({ emailId: EmailId });
    if (users.length === 0) {
      res.status(404).send("Users not found");
    } else {
      res.send(users);
    }

    res.send(users);
  } catch (err) {
    res.status(404).send("Somethng went wrong");
  }
});

// GET all users API
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(404).send("Users not found");
  }
});

// Update User by Id
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  try {
    await User.findByIdAndUpdate(userId, data);
    res.send("User Updated Successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

// Delete User by Id
app.delete("/user", async (req, res) => {
  const EmailId = req.body.emailId;

  try {
    await User.findOneAndDelete({ emailId: EmailId });
    res.send("User deleted Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
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
