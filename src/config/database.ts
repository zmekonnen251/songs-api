import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  const { MONGO_URL } = process.env;
  try {
    await mongoose.connect(MONGO_URL || 'mongodb://localhost:27017/songs');

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

export default connectToDatabase;
