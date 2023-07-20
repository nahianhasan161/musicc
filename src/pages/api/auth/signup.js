import connectDB from '@/lib/db';
import Users from '@/models/Users';
import { hash } from 'bcryptjs';
// Assuming your import statements are correct and you have the necessary modules and models.
import { SendEmail } from '@/helper/mailer';
export default async function handler(req, res) {
    try {
      await connectDB(); // Assuming this function connects to the MongoDB database.
      
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'HTTP method not valid, only POST is accepted' });
      }
      
      if (!req.body) {
        return res.status(400).json({ error: "Form data is missing" });
      }
      
      const { username, email, password } = req.body;
      
      
      // Check if a user with the same email already exists
      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return res.status(422).json({ error: "User Already Exists" });
      }
      
      // Hash the password
      const hashedPassword = await hash(password, 12);
      
      
      // Create the new user
      const newUser = await Users.create({ username, email, password: hashedPassword });
      
      
      //send Verify Email
     const mail = await SendEmail({email,userId: newUser._id});
      
      // Respond with the user object
      res.status(201).json({ status: true, user: newUser });
    } catch (error) {
      
      res.status(500).json({ error: "Something went wrong"+error });
    }
  }
  