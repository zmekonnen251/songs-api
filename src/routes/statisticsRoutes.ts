import { Router } from 'express';
import { getStatistics } from '../utils/statistics';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Statistics
 *   description: API for retrieving statistics
 */

/**
 * @swagger
 * /statistics:
 *   get:
 *     summary: Retrieve statistics
 *     tags: [Statistics]
 *     responses:
 *       200:
 *         description: A JSON object containing statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: integer
 *                   example: 1500
 *                 activeUsers:
 *                   type: integer
 *                   example: 300
 *                 totalSongs:
 *                   type: integer
 *                   example: 500
 *       500:
 *         description: Failed to fetch statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Failed to fetch statistics
 */
router.get('/', async (_req, res) => {
  try {
    const stats = await getStatistics();
    res.json(stats);
  } catch (error) {
    const errorMessage =
      (error as Error).message || 'Failed to fetch statistics';
    res.status(500).json({ message: errorMessage });
  }
});

export default router;
