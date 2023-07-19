// File: controllers/userController.js

import Profile from "@/models/ProfileSchema.js";

export async function getUsers(req, res) {
  try {
    const users = await Profile.find({});

    if (!users) return res.status(404).json({ error: "Data not found" });

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

export async function postUser(req, res) {
    try {
      const formData = req.body;
  
      if (!formData)
        return res.status(400).json({ error: "Form data not provided" });
  
      const newUser = await Profile.create(formData);
  
      return res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error while saving data to the database" });
    }
  }
  

export async function putUser(req, res) {
    try {
      const { userId } = req.query;
      const formData = req.body;
  
      if (userId && formData) {
        const user = await Profile.findByIdAndUpdate(userId, formData);
        if (!user) {
          // If the user with the specified ID is not found in the database
          return res.status(404).json({ error: "User not found" });
        }
        // Successful update
        return res.status(200).json(user);
      } else {
        // If userId or formData is missing
        return res.status(400).json({ error: "Bad Request" });
      }
    } catch (error) {
      // Any other errors that occurred during the update process
      console.error(error);
      return res.status(500).json({ error: "Error while updating the data" });
    }
  }
  