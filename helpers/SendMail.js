var nodemailer = require('nodemailer');

module.exports = async (subject, templateEmail, toEmail) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f257a9718b2415",
            pass: "464d592f898980",
        },
    });

    var mailOptions = {
    
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: "duy.haivl321@gmail.com",
        subject: "Hello ✔", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>"
    }

    try {
        var success = await transporter.sendMail(mailOptions);
        if (success) {
            return true
        }
    } catch (error) {
        console.log(error);
        return false;
    }

}