require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: options.to,
        subject: options.subject,
        text: options.message
    };

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;