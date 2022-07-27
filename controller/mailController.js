const nodemailer = require('nodemailer')
require('dotenv').config()

exports.sendMail = async (req,res) => {
    try {
        let testAcc = await nodemailer.createTestAccount()
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.PASS, 
            },
        });
        console.log(process.env.USER_EMAIL + '\n' + process.env.PASS)
        let result = await transporter.sendMail({
            from:process.env.USER_EMAIL, 
            to: "harunnjenga1@gmail.com",
            subject: "NodeMailer",
            // text: "Hello world?", // plain text body
            html: "<h2>Hello !!</h2><p>this is email from nodemailer</p>", // html body
          });
        res.send({msg:result.response})
    } catch (error) {
      res.send({msg:'mail not send:\n' + error})  
    }
    
}