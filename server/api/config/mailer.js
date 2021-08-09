const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }, 
    tls: {
        rejectUnauthorizedUser: false
    }
});

exports.welcomeMail = (email, name) => transportersendMail({
    from: 'Vue Mailer',
    to: email,
    subject: "Account created",
    template: "welcome",
    context: {
        user: name
    }
});