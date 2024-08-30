export interface Song {
  id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface Stats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsByGenre: Record<string, number>;
  songsByArtist: Record<string, number>;
  albumsByArtist: Record<string, number>;
  songsByAlbum: Record<string, number>;
}

export interface SongRequest {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongResponse {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
}
