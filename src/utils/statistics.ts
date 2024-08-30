import Song from '../models/song';

interface Stats {
	totalSongs: number;
	totalArtists: number;
	totalAlbums: number;
	totalGenres: number;
	songsByGenre: Record<string, number>;
	songsByArtist: Record<string, number>;
	albumsByArtist: Record<string, number>;
	songsByAlbum: Record<string, number>;
}

export const getStatistics = async (): Promise<Stats> => {
	const totalSongs = await Song.countDocuments();
	const genres = await Song.distinct('genre');
	const artists = await Song.distinct('artist');
	const albums = await Song.distinct('album');

	const songsByGenre = await Song.aggregate([
		{ $group: { _id: '$genre', count: { $sum: 1 } } },
	]).then((results) =>
		results.reduce((acc: Record<string, number>, item: any) => {
			acc[item._id] = item.count;
			return acc;
		}, {})
	);

	const songsByArtist = await Song.aggregate([
		{ $group: { _id: '$artist', count: { $sum: 1 } } },
	]).then((results) =>
		results.reduce((acc: Record<string, number>, item: any) => {
			acc[item._id] = item.count;
			return acc;
		}, {})
	);

	const albumsByArtist = await Song.aggregate([
		{
			$group: {
				_id: { artist: '$artist', album: '$album' },
				count: { $sum: 1 },
			},
		},
		{ $group: { _id: '$_id.artist', albums: { $sum: 1 } } },
	]).then((results) =>
		results.reduce((acc: Record<string, number>, item: any) => {
			acc[item._id] = item.albums;
			return acc;
		}, {})
	);

	const songsByAlbum = await Song.aggregate([
		{ $group: { _id: '$album', count: { $sum: 1 } } },
	]).then((results) =>
		results.reduce((acc: Record<string, number>, item: any) => {
			acc[item._id] = item.count;
			return acc;
		}, {})
	);

	return {
		totalSongs,
		totalArtists: artists.length,
		totalAlbums: albums.length,
		totalGenres: genres.length,
		songsByGenre,
		songsByArtist,
		albumsByArtist,
		songsByAlbum,
	};
};
