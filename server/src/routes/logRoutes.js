import express from 'express';
import { getLogs, createLog, updateLog } from '../controllers/logController';

const router = express.Router();

router.get('/', getMeals);
router.post('/:id', createMeal);
router.patch('/:id', updateMeal);