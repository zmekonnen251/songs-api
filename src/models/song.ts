import mongoose, { Document, Schema } from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Song:
 *       type: object
 *       required:
 *         - title
 *         - artist
 *         - album
 *         - genre
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the song
 *         title:
 *           type: string
 *           description: The title of the song
 *         artist:
 *           type: string
 *           description: The artist of the song
 *         album:
 *           type: string
 *           description: The album the song belongs to
 *         genre:
 *           type: string
 *           description: The genre of the song
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the song was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time the song was last updated
 *       example:
 *         id: 60b6a6f6e4b0a529b1b05b1a
 *         title: Bohemian Rhapsody
 *         artist: Queen
 *         album: A Night at the Opera
 *         genre: Rock
 *         createdAt: 2024-08-28T18:25:43.511Z
 *         updatedAt: 2024-08-28T18:25:43.511Z
 */
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
