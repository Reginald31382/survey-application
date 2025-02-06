installed: 
npm install survey-react-ui survey-core
mkdir backend && cd backend
npm init -y
npm install express nodemailer cors body-parser dotenv

Run Frontend- npm start
Run Backend- node server.js

How to Fix the Gmail Authentication Error (EAUTH 535)
1. Use an App Password Instead of Your Gmail Password
Gmail no longer allows direct login with your normal password when using third-party applications like Nodemailer. Instead, you must generate an App Password.

🔹 Steps to Generate an App Password:

Enable 2-Step Verification in your Google Account:

Go to 🔗 Google Security Settings.
Under "Signing in to Google", click "2-Step Verification" and enable it.
Generate an App Password:

Go to 🔗 Google App Passwords.
Under "Select App", choose "Mail".
Under "Select Device", choose "Other (Custom Name)" and enter "Nodemailer".
Click "Generate" and copy the 16-character password (e.g., abcd efgh ijkl mnop).

Use SMTP Settings Instead of service: "gmail"
If the issue persists, use SMTP settings directly:

<!-- let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Use 587 if TLS is needed
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
}); -->