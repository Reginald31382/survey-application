require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const surveyData = req.body;

  // Configure Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email from .env file
      pass: process.env.PASSWORD, // Your email password or App Password
    },
  });

  // Email content
  let mailOptions = {
    from: process.env.EMAIL,
    to: "vassarjonez@yahoo.com", // Replace with your email
    subject: "New Survey Response",
    text: `Survey Results:\n\n${JSON.stringify(surveyData, null, 2)}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
