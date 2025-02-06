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
    host: "smtp.gmail.com",
    port: 465, // Use 587 if TLS is needed
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  console.log("EMAIL:", process.env.EMAIL);
  console.log("PASSWORD:", process.env.PASSWORD ? "Loaded" : "Not Loaded");

  // Email content
  let mailOptions = {
    from: process.env.EMAIL,
    to: "testin31382@gmail.com", // Replace with your email
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
