import { Request, Response } from 'express';
import Song from '../models/song';

export const createSong = async (req: Request, res: Response) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllSongs = async (req: Request, res: Response) => {
  try {
    const { genre, artist, album, title, page = 1, perPage = 10 } = req.query;

    // Constructing a filter object
    const filter: any = {};
    let artists: string[] = [];
    let albums: string[] = [];
    let genres: string[] = [];

    if (genre) filter.genre = genre;
    if (artist) filter.artist = artist;
    if (album) filter.album = album;
    if (title) filter.title = new RegExp(title as string, 'i'); // Case-insensitive search

    // Calculate the pagination variables
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(perPage as string, 10);
    const skip = (pageNumber - 1) * limitNumber;

    // Fetching the filtered, searched, and paginated songs
    const songs = await Song.find(filter).skip(skip).limit(limitNumber);

    // Get total count of the filtered songs
    const total = await Song.countDocuments(filter);

    if (!artist && !album && !genre) {
      artists = await Song.distinct('artist');
      albums = await Song.distinct('album');
      genres = await Song.distinct('genre');
    }

    if (artist) {
      artists = await Song.distinct('artist', filter);
      albums = await Song.distinct('album', filter);
      genres = await Song.distinct('genre', filter);
    }

    if (album) {
      artists = await Song.distinct('artist', filter);
      albums = await Song.distinct('album', filter);
      genres = await Song.distinct('genre', filter);
    }

    if (genre) {
      artists = await Song.distinct('artist', filter);
      albums = await Song.distinct('album', filter);
      genres = await Song.distinct('genre', filter);
    }

    if (songs.length === 0) {
      return res.status(404).json({ message: 'No songs found' });
    }

    const response = {
      page: pageNumber,
      limit: limitNumber,
      total,
      songs,
      artists,
      albums,
      genres,
    };
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

export const getSongById = async (req: Request, res: Response) => {
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ message: 'Song not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSong = async (req: Request, res: Response) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (song) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ message: 'Song not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};

export const deleteSong = async (req: Request, res: Response) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (song) {
      res.status(200).json({ message: 'Song deleted' });
    } else {
      res.status(404).json({ message: 'Song not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error?.message });
  }
};
export function getAll(arg0: string, getAll: any) {
  throw new Error('Function not implemented.');
}
