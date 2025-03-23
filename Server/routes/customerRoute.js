const express = require("express");
const route = express.Router();
const CustomerController = require("../controllers/CustomerController");


route.post("/InsertData", CustomerController.InsertUserData );
route.post("/CustomerLogin", CustomerController.CustomerLoginData);
route.post("/transaction" , CustomerController.SubmitCashData)
route.get("/balance" , CustomerController.balanceDisplay)
route.post('/Statement',CustomerController.Statement);
route.post('/resetpassword', CustomerController.resetPassword)
route.post("/profile",CustomerController.ProfilePage)









module.exports = route;