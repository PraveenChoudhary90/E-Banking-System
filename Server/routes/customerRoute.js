const express = require("express");
const route = express.Router();
const CustomerController = require("../controllers/CustomerController");


route.post("/InsertData", CustomerController.InsertUserData );
route.post("/CustomerLogin", CustomerController.CustomerLoginData);
route.post("/transaction" , CustomerController.SubmitCashData)
route.get("/balance" , CustomerController.balanceDisplay)
route.post("/miniStatement",CustomerController.MiniStatement)
route.post("/searchStatement",CustomerController.SearchStatement);










module.exports = route;