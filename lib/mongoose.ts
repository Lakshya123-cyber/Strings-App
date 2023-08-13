import mongoose from "mongoose";

// variable to check if mongoose is connected
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL is not found!");
  if (isConnected) return console.log("Connecting to Mongo");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
