import request from 'supertest';
import app from '../src/app'; // Adjust the import to your app entry point

describe('Statistics API', () => {
  it('should get statistics', async () => {
    const response = await request(app).get('/api/stats').expect(200);

    expect(response.body).toHaveProperty('totalSongs');
    expect(response.body).toHaveProperty('totalArtists');
    expect(response.body).toHaveProperty('totalAlbums');
    expect(response.body).toHaveProperty('totalGenres');
  });
});
