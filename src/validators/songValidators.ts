import { body, query } from 'express-validator';

export const createSongValidators = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('artist').trim().notEmpty().withMessage('Artist is required'),
  body('album').trim().notEmpty().withMessage('Album is required'),
  body('genre').trim().notEmpty().withMessage('Genre is required'),
];

export const getAllSongsValidators = [
  query('genre').optional().trim().escape(),
  query('artist').optional().trim().escape(),
  query('album').optional().trim().escape(),
  query('title').optional().trim().escape(),
  query('page').optional().isInt({ min: 1 }).toInt(),
  query('perPage').optional().isInt({ min: 1 }).toInt(),
];

export const updateSongValidators = [
  body('title').optional().trim().notEmpty().withMessage('Title is required'),
  body('artist').optional().trim().notEmpty().withMessage('Artist is required'),
  body('album').optional().trim().notEmpty().withMessage('Album is required'),
  body('genre').optional().trim().notEmpty().withMessage('Genre is required'),
];
