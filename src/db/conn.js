require('dotenv/config')
const mongoose = require('mongoose')

async function connectDB() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@scout-stock.n72wxn0.mongodb.net/?retryWrites=true&w=majority`);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
}

module.exports = connectDB;