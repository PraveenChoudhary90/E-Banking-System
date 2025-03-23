const CustomerModel = require("../model/customerModel");
const autoPassword = require("../middleware/autoPassword");
const nodemailer = require("nodemailer");
const transactionModel = require("../model/transactionModel");

const InsertUserData = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    city,
    mobile,
    fulladdress,
    pincode,
    statename,
  } = req.body;
  const myPAss = autoPassword.autoPassword();
  try {
    const Customer = await CustomerModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      city: city,
      mobile: mobile,
      fulladdress: fulladdress,
      pincode: pincode,
      statename: statename,
      password: myPAss,
    });
    res
      .status(200)
      .send({
        msg:
          "Your Account Is Open SuccessFully Now You Can Check Your Password On Email",
      });
  } catch (error) {
    res.status(400).send({ msg: "Error in Server Side" });
  }
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pc852180@gmail.com",
      pass: "yzjt qhhn xcnx gcmi",
    },
  });

  let mailDetails = {
    from: "pc852180@gmail.com",
    to: email,
    subject: "E-Banking registration",
    text: `Dear ${firstname} ${lastname} Your account successfully created \n Your Password is ${myPAss}`,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};

const CustomerLoginData = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Customer = await CustomerModel.findOne({ email: email });
    if (!Customer) {
      res.status(400).send({ msg: "Email Not Found" });
    }
    if (Customer.password != password) {
      res.status(400).send({ msg: "Password Not Match" });
    }
    res.status(200).send(Customer);
  } catch (error) {
    res.status(400).send({ msg: "Error in Server Side " });
  }
};

const SubmitCashData = async (req, res) => {
  const { amount, status, customerid } = req.body;
  const data = await transactionModel.create({
    amount: amount,
    status: status,
    customerid: customerid,
  });
  res.status(200).send(data);
};
const balanceDisplay = async (req, res) => {
  const { userid } = req.query;
  const balance = await transactionModel.find({ customerid: userid });
  res.status(200).send(balance);
};



const AmountStatement=async(req,res)=>{
    // console.log(req.body);
    const { userid }=req.body;
    try {
        // const findData=await amount_Model.find({CustmerId:userid}).sort({date:-1})
        const Amount=await transactionModel.find({CustmerId:userid}).sort({date:-1}).limit(10);
        // console.log(findData)
        const Balance= await transactionModel.find({customerid:userid})
        res.status(200).send({Amount:Amount, Balance:Balance});
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
    
}



      //Statement between two dates
    const MiniStatement=async(req,res)=>{
      try {
        const {customerid,startDate,endDate} =  req.body;
        const user = await transactionModel.find({$and:
          [{customerid:customerid},{"date":{
           $gte: new Date(startDate),
           $lte: new Date(endDate).setHours(23, 59, 59, 999) 
          }}]}).sort({date:-1});
        res.status(200).send(user);
      } catch (error) {
        res.status(400).send("Something went wrong")
      }  
    }





    const ProfilePage=async(req,res)=>{
    // console.log(req.body)
    const { userid }=req.body;
    try {
        let data =await CustomerModel.findById(userid)
        // console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server error");
    }
    
}





//Reset Password
const resetPassword=async(req,res)=>{
try {
    const { oldPassword, newPassword, renewPassword, userid } = req.body;

const passwordMatch= await CustomerModel.findById(userid);
if (passwordMatch.password!= oldPassword)
{
   res.status(400).send({msg:"Invalid Old Password!"});
}
else if(newPassword!=renewPassword){
   res.status(400).send({msg:"Password does not match please corrct right password"})
}
else
{
  await CustomerModel.findByIdAndUpdate(userid,{password:newPassword});
}

res.status(200).send({msg:"Password SuccessFully Change"});
} catch (error) {
  res.status(500).send({msg:"Something went wrong"})
}  

}



module.exports = {
  InsertUserData,
  CustomerLoginData,
  SubmitCashData,
  balanceDisplay,
    resetPassword,
    AmountStatement,
   MiniStatement,
   ProfilePage
};
