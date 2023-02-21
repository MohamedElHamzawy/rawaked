const nodemailer = require("nodemailer");

const mailSender = (email, message) => {
    const transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.TRANSPORT_EMAIL,
            pass: process.env.TRANSPORT_PASSWORD
        }
    })
    
    const mail = transport.sendMail({
        from: `"RAWAKED" <${process.env.TRANSPORT_EMAIL}>`,
        to: email,
        subject: "Verification ✔",
        text: "",
        html: message
    })
}

module.exports = mailSender
