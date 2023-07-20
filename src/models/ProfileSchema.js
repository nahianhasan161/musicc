import mongoose from "mongoose";

// Check if the model is already defined before defining it
const Profile = mongoose.models.Profile
  ? mongoose.models.Profile
  : mongoose.model(
      "Profile",
      new mongoose.Schema({
        username: String,

        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        mobileNumber: {
          type: Number,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        country: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        pincode: {
          type: String,
          required: true,
        },
      })
    );

export default Profile;
