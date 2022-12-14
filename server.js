const express = require("express");
const mongoose = require("mongoose");
const expenseRouter = require("./routes/expenseRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://user2:IyjfLTq0vg9AMScp@spendingtracker.wwnp1ek.mongodb.net/?retryWrites=true&w=majority",
  //"mongodb+srv://admin:QImS5AN2EBXitbeX@datatest.wkvck9g.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(expenseRouter);

app.listen(3000, () => {
  console.log("Confirming the server is running...");
});