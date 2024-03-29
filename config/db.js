const { default: mongoose } = require("mongoose");
require("dotenv").config();

// Connect to DB
const db = 'mongodb+srv://riturajanand91:hAlKWphtYty4rHbU@cluster0.ipca55n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
