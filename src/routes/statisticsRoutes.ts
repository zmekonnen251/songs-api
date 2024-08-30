import { Router } from 'express';
import { getStatistics } from '../utils/statistics';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const stats = await getStatistics();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
});

export default router;
