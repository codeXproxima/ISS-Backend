const nodemailer = require("nodemailer");

async function emailSenderMail(MAIL_Email, MAIL_Password, data, layout) {
  let status = {};

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        user: MAIL_Email,
        pass: MAIL_Password,
      },
    });

    const layoutArray = [
      `<div><h1>Hello</h1><p>your OTP is: <b>${data}</b></p></div>`,
      `<div><h2>Your Password is Changed</h2><p>your Password is: <b>${data}</b></p></div>`,
    ];

    const message = {
      from: "",
      to: MAIL_Email,
      replyTo: "",
      subject: "Test Mail",
      html: layoutArray[layout],
    };

    await transporter.sendMail(message);

    console.log("successfully sent the Mail");
    status = { status: true, message: `Successfully sent the Mail` };
  } catch (error) {
    status = { status: false, message: "Error in sending mail" };
    console.error("Error in sending mail:", error);
  }

  return status;
}

module.exports = { emailSenderMail };
