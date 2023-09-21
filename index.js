// 8FP5yClY5qn35rx3
// mongodb+srv://aakashchaudhary172m:8FP5yClY5qn35rx3@cluster0.mivx4lj.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aakashchaudhary172m:8FP5yClY5qn35rx3@cluster0.mivx4lj.mongodb.net/?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const { userName, email, password } = req.body;
  console.log(userName);
  res.send({ userName, email, password });
});

app.listen(port, () => {
  console.log("server is running at port", port);
});
