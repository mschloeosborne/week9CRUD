const express = require("express");
const expenseModel = require("../models/expense");
const app = express();

// Get api end point through /expense

app.get("/expenses", async (request, response) => {
  const expenses = await expenseModel.find({});

  try {
    response.send(expenses);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Post API end point through /expense

app.post("/expense", async (request, response) => {
    const expense = new expenseModel(request.body);
  
    try {
      await expense.save();
      response.send(expense);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  // Update API endpoint through /expense

  app.patch("/expense/:id", async (request, response) => {
    try {
      await expenseModel.findByIdAndUpdate(request.params.id, request.body);
      await expenseModel.save();
      response.send(expense);
    } catch (error) {
      response.status(500).send(error);
    }
  });


// Delete API end point through /expense

app.delete("/expense/:id", async (request, response) => {
    try {
      const expense = await expenseModel.findByIdAndDelete(request.params.id);
  
      if (!expense) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;