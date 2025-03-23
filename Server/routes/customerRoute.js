const express = require("express");
const route = express.Router();
const CustomerController = require("../controllers/CustomerController");


route.post("/InsertData", CustomerController.InsertUserData );
route.post("/CustomerLogin", CustomerController.CustomerLoginData);
route.post("/transaction" , CustomerController.SubmitCashData)
route.get("/balance" , CustomerController.balanceDisplay);
route.get("/AccountStatement" , CustomerController.AccountStatement);
route.post('/ministatement',CustomerController.MiniStatement);
route.post('/resetpassword', CustomerController.resetPassword)
route.post("/profile",CustomerController.ProfilePage)









module.exports = route;