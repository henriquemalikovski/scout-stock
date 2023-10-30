import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@scout-stock.d0o3hge.mongodb.net/?retryWrites=true&w=majority`);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
}

export default connectDB;