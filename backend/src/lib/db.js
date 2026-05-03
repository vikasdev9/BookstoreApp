import mongoose from "mongoose";

export const connectDB = async () => {
  try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

    // const conn = await mongoose.connect(
    //   "mongodb+srv://vikaschauhan0368_db_user:A8oQ3HkdHa7QsRfb@cluster0.f622dgz.mongodb.net/BookStoreDb?appName=Cluster0"
    // );
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

