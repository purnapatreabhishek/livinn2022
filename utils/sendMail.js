const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const html = await ejs.renderFile(
    path.join(process.cwd(), `views/${options.template}.ejs`),
    { options }
  );
  const mailOptions = {
    from: process.env.EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
