const nodemailer = require("nodemailer");

console.log(`####### NODE SEND EMAIL SERVER #######`);

async function main() {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  await transporter.sendMail({
    from: '"Fred Foo 👻" &lt;foo@example.com>', // sender address
    to: "wallace.espindola@gmail.com, info@wtechitsolutions.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
}
main().catch(console.error);