const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587, // Use port 587 for TLS
            secure: false, // Use false for TLS (STARTTLS)
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Disable certificate validation for development (not recommended for production)
            },
        });

        let info = await transporter.sendMail({
            from: 'StudyNotion || CodeHelp - by Babbar',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Email sent: ", info.response); // Changed to info.response for clarity
        return info;
    } catch (error) {
        console.log("Error occurred while sending email: ", error.message);
    }
};

module.exports = mailSender;
