import nodemailer from "nodemailer";

let transporterInfo = {
  //The main thing in this file is transporterInfo and mailInfo
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    //Note: user and pass must be genuine
    user: "lazyfox916@gmail.com",
    pass: "qnvb msso uhyw gglm",
  },
};

export let sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error detected", error.message);
  }
};
