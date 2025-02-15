const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const Email = require("./email.model");

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());

const connectDb = async () => {
  await mongoose.connect(
    process.env.MONGO_URI
  );
  console.log("connecte to DB");
};

connectDb();

app.post("/email", async (req, res) => {
  const { email } = req.body;

  try {
    await Email.create({email});
    res.json({ message: "Email is Stored" });
  } catch (err) {
    res.json({err})
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});
