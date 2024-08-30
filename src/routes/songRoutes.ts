import { Router } from 'express';
import * as songController from '../controllers/songController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Songs
 *   description: Song management
 */

/**
 * @swagger
 * /songs:
 *   post:
 *     summary: Create a new song
 *     tags: [Songs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               artist:
 *                 type: string
 *               genre:
 *                 type: string
 *             required:
 *               - title
 *               - artist
 *     responses:
 *       201:
 *         description: Song created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 artist:
 *                   type: string
 *                 genre:
 *                   type: string
 *       400:
 *         description: Bad request
 *   get:
 *     summary: Get all songs
 *     tags: [Songs]
 *     responses:
 *       200:
 *         description: List of all songs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   artist:
 *                     type: string
 *                   genre:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router
  .route('/')
  .post(songController.createSong)
  .get(songController.getAllSongs);

/**
 * @swagger
 * /songs/{id}:
 *   get:
 *     summary: Get a song by ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The song ID
 *     responses:
 *       200:
 *         description: The song description by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 artist:
 *                   type: string
 *                 genre:
 *                   type: string
 *       404:
 *         description: Song not found
 *   put:
 *     summary: Update a song by ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The song ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               artist:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Song updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 artist:
 *                   type: string
 *                 genre:
 *                   type: string
 *       400:
 *         description: Bad request
 *       404:
 *         description: Song not found
 *   delete:
 *     summary: Delete a song by ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The song ID
 *     responses:
 *       204:
 *         description: Song deleted successfully
 *       404:
 *         description: Song not found
 */
router
  .route('/:id')
  .get(songController.getSongById)
  .put(songController.updateSong)
  .delete(songController.deleteSong);

export default router;
