import nodemailer from 'nodemailer'
import User from "@/models/Users"
import bcryptjs from "bcryptjs"

export const SendEmail = async({email,userId})=>{
    try {
       const hashedToken = await bcryptjs.hash(userId.toString(),10)
       User.findByIdAndUpdate(userId,
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
      const verifyLink = process.env.NEXTAUTH_URL+"/verifyemail?token="+hashedToken
      const mailOptions = {
        from : 'hasan@gmail.com',
        to: 'email',
        subject:"Verify Password",
        html:`<p>Click <a href="${verifyLink}</p><br> Copy Here: <strong>${verifyLink}</strong`

    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
    } catch (error) {
        throw new Error(error.message);
    }
}