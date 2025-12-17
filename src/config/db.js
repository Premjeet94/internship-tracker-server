import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection Established");
  } catch (error) {
    console.log("Connection Failed");
    process.exit(1)
  }
};
