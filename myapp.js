const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/Chefs.json");
const chefDetails = require("./data/ChefDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("running chefs sever");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});


app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chefsinfo = chefDetails.find(chef => chef.id === id);
  res.send(chefsinfo);
});



app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
