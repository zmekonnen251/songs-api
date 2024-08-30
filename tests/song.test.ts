import request from 'supertest';
import app from '../src/app';

describe('Song API', () => {
  let songId: string;

  it('should create a new song', async () => {
    const response = await request(app)
      .post('/api/songs')
      .send({
        title: 'Test Song',
        artist: 'Test Artist',
        album: 'Test Album',
        genre: 'Test Genre',
      })
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    songId = response.body._id;
  });

  it('should get all songs', async () => {
    const response = await request(app).get('/api/songs').expect(200);

    expect(Array.isArray(response.body.songs)).toBe(true);
  });

  it('should get a song by ID', async () => {
    const response = await request(app).get(`/api/songs/${songId}`).expect(200);

    expect(response.body).toHaveProperty('title', 'Test Song');
  });

  it('should update a song', async () => {
    const response = await request(app)
      .put(`/api/songs/${songId}`)
      .send({
        title: 'Updated Test Song',
      })
      .expect(200);

    expect(response.body).toHaveProperty('title', 'Updated Test Song');
  });

  it('should delete a song', async () => {
    await request(app).delete(`/api/songs/${songId}`).expect(200);

    await request(app).get(`/api/songs/${songId}`).expect(404);
  });
});
