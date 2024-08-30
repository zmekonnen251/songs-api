import mongoose, { Document, Schema } from 'mongoose';

interface ISong extends Document {
	title: string;
	artist: string;
	album: string;
	genre: string;
}

const songSchema: Schema = new Schema({
	title: { type: String, required: true },
	artist: { type: String, required: true },
	album: { type: String, required: true },
	genre: { type: String, required: true },
});

const Song = mongoose.model<ISong>('Song', songSchema);
export default Song;
