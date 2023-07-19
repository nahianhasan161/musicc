const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://saurav:saurav@cluster0.s7coewk.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB at ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

module.exports = connectDB;
