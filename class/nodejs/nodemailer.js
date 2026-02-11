import express from "express";
import nodemailer from "nodemailer";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anish13102000@gmail.com",
    pass: "",
  },
});
const mailOptions = {
  from: "anish13102000@gmail.com",
  to: "vikaskumar20012001@gmail.com",
  subject: "Test Email from Node.js",
  text: "This is a test email sent from Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


