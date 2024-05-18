require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { PORT, env } = process.env;

const port = PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

if (env === "Prod") {
    console.log = () => {};
  }

app.get("/", (req,res) =>{
    res.send("working")
})

app.listen(port, () => {
  console.log(`server is listing on port: http://localhost:${port}`);
});
