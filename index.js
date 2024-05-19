require("dotenv").config();
const express = require("express");
const cors = require("cors");
const DB = require('./config/db');
const app = express();

const { PORT, env } = process.env;

const port = PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


if (env === "Prod") {
  console.log = () => {};
}

DB();

app.get("/", (req, res) => {
  res.send("working");
});

if (env === "Dev") {
  app.listen(port, () => {
    console.log(`server is listing on port: http://localhost:${port}`);
  });
} else {
  app.listen();
}
