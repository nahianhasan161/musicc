import Users from "@/models/Users";
import db from '@/lib/db';
import connectDB from "@/lib/db";
export default async function  handler (req, res) {
    if (req.method === 'POST') {
      try {
        await connectDB()
       } catch (error) {
        res.status(405).json({ error: 'database not connected',err: JSON.stringify(error) });
       }
      try {
      
        // Simulate processing the user registration request (you can use a real database in your actual app)
        const { token } = req.body;
        const user = await  Users.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
        if(!user) {
        
          res.status(403).json({ error: 'User Not Found' });
        }

        //  database operations here to save the user data.
            /* user.isVerified = true
          user.verifyToken = undefined
          user.verifyTokenExpiry = undefined
          await user.save();  */
        //  send a success response with the received data.
        
        res.status(202).json({ message: 'User Email successfully Verified', token});
      } catch (error) {
        // If there's an error, send an error response
        res.status(501).json({ error: 'An error occurred during Verification' });
      }
    } else {
      // Only allow POST requests, reject other HTTP methods
      res.status(405).json({ error: 'Method not allowed' });
    }
  }