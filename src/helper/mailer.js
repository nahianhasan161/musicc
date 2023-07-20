import nodemailer from 'nodemailer'
import User from "@/models/Users"
import bcryptjs from "bcryptjs"

export const SendEmail = async({email,userId})=>{
    try {
       const hashedToken = await bcryptjs.hash(userId.toString(),10)
      await User.findByIdAndUpdate(userId,
        {verifyToken:hashedToken,
            verifyTokenExpire:Date.now()+36000000},
       
       )

       var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "bc6fc8a04ab28c",
          pass: "c1e21c4f8918eb"
        }
      });
      const verifyLink = "http://localhost:3000/verifyemail?token="+hashedToken
      const mailOptions = {
        from : 'hasan@gmail.com',
        to: email,
        subject:"Verify Password",
        html:`<p> <a href="${verifyLink}">Click</a></p><br> Copy Here: <strong>${verifyLink}</strong`

    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
    } catch (error) {
        throw new Error(error.message);
    }
}