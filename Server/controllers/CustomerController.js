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



const ResetPasword=async(req,res)=>{
    // console.log(req.body);
    const {
        userid,
        oldpassword,
        newpassword,
        confomepass
      }=req.body;
      try {
        let finddata =await custmor_model.findById(userid);
        const passwordMatching = await bcrypt.compare(oldpassword, finddata.accountpassword);
        if (!passwordMatching) {
            // console.log(passwordMatching);
            return res.status(400).send({ msg: "Invalid password!" });
        }
       
                  let salt =await bcrypt.genSalt(10);
                  let hasPassword=await bcrypt.hash(newpassword,salt);
             let updataPassword =await custmor_model.findByIdAndUpdate(userid,{accountpassword:hasPassword})
               res.status(200).send({msg:"Your pasword is Reset it..!!"})
      
       
      } catch (error) {
        res.status(500).send({msg:"Server Error"})
      }  
}



const AmountStatement=async(req,res)=>{
    // console.log(req.body);
    const { userid }=req.body;
    try {
        // const findData=await amount_Model.find({CustmerId:userid}).sort({date:-1})
        const findData=await amount_Model.find({CustmerId:userid})
        // console.log(findData)
        res.status(200).send(findData)
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
    
}



const MiniStatement=async(req,res)=>{
    // console.log(req.body);
    const { userid }=req.body;
    try {
        const findData=await amount_Model.find({CustmerId:userid}).sort({date:-1}).limit(8);
        // console.log(findData)
        res.status(200).send(findData)
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
  
}


const SearchStatement=async(req,res)=>{
    console.log(req.body);
    const { userid ,enddate, startdate}=req.body;
    try {
        // let findData =await amount_Model.find({
        //     $and: [
        //       {
        //     $and: [
        //       { From: { $gte: startdate } },
        //       { To: { $lte: enddate } },
        //     ],    // and operator body finishes
        //     },
        //       { CustmerId:userid},
        //     ], //Or operator body finishes
        //   }).sort({date:-1})


        let findData =await amount_Model.find({    
                $and: [
                    {"date":{ $gte: startdate ,
                    $lte: enddate }},
                  { CustmerId:userid}
                ],
              })
        //   console.log(!findData)
          if(!findData){
            console.log("no")
            return res.status(400).send({msg:"false"})
          }
           res.status(200).send({msg:"true"})
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
    
}

module.exports = {
  InsertUserData,
  CustomerLoginData,
  SubmitCashData,
  balanceDisplay,
    ResetPasword,
    AmountStatement,
    MiniStatement,
    SearchStatement
};
