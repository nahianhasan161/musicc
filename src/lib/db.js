const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    /* mongodb+srv://saurav:saurav@cluster0.s7coewk.mongodb.net/?retryWrites=true&w=majority */
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB at ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

module.exports = connectDB;
