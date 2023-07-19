// api/dashboard.js

import connectDB from "@/lib/db";
import Profile from "@/models/ProfileSchema";

export default async function handler(req, res) {
  try {
    await connectDB(); // Assuming this function connects to the MongoDB database.

    if (req.method !== "POST") {
      return res.status(405).json({ error: "HTTP method not valid, only POST is accepted" });
    }

    if (!req.body) {
      return res.status(400).json({ error: "Form data is missing" });
    }

    const { username, firstName, lastName, displayName, email, country, state, address, city, pincode } = req.body;

    // Check if a profile with the same email already exists
    const existingProfile = await Profile.findOne({ email });
    if (existingProfile) {
      return res.status(422).json({ error: "Profile with this email already exists" });
    }

    // Create the new profile
    const newProfile = await Profile.create({
      username,
      firstName,
      lastName,
      displayName,
      email,
      country,
      state,
      address,
      city,
      pincode,
    });

    // Respond with the profile object
    res.status(201).json({ status: true, profile: newProfile });
  } catch (error) {
    console.error("Error during profile creation:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

// import connectDB from "@/lib/db";
// import Profile from "@/models/ProfileSchema.js";
// import mongoose from "mongoose";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { firstName, lastName, displayName, email, displayEmail, country, state, address, city, pincode } = req.body;

//     try {
//       await connectDB();
//       // Make sure the required fields have valid values
//       if (!firstName || !lastName || !displayEmail) {
//         return res.status(400).json({ msg: ["Missing required fields."] });
//       }

//       await Profile.create({ firstName, lastName, displayName, email, displayEmail, country, state, address, city, pincode });

//       return res.status(200).json({
//         msg: ["Profile created successfully"],
//         success: true,
//       });
//     } catch (error) {
//       if (error instanceof mongoose.Error.ValidationError) {
//         let errorList = [];
//         for (let e in error.errors) {
//           errorList.push(error.errors[e].message);
//         }
//         console.log(errorList);
//         return res.status(400).json({ msg: errorList });
//       } else {
//         console.error(error);
//         return res.status(500).json({ msg: ["Unable to create profile."] });
//       }
//     }
//   } else {
//     // Handle other HTTP methods if necessary
//     return res.status(405).end();
//   }
// }
