import { Router } from 'express';
import * as songController from '../controllers/songController';

const router = Router();

router
  .route('/')
  .post(songController.createSong)
  .get(songController.getAllSongs);
router
  .route('/:id')
  .get(songController.getSongById)
  .put(songController.updateSong)
  .delete(songController.deleteSong);

export default router;
