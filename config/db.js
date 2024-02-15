import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected!".bgMagenta.black);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
