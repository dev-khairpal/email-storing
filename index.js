const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const app = express();
const Email = require("./email.model");

app.use(bodyParser.json());

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://devkhairpal:ITLnzdK6IAjea2NA@cluster0.om2gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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

app.listen(6000, () => {
  console.log("server is running on port 3000");
});
