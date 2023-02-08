require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
//CONTROLLERS

const postRouter = require("./routes/postRoute");

//CONTROLLERS

// MIDDLEWARE
app.use(express.json());

// MIDDLEWARE

// ROUTES
app.use("/api/v1/posts", postRouter);

// ROUTES
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connection successful");
  });

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
