import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri =
  process.env.MONGO_URI || 'mongodb://localhost:27017/song-api-db';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

export default connectToDatabase;
