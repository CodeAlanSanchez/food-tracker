import express from 'express';
import {
  getMeals, getMeal, createMeal, updateMeal, deleteMeal,
} from '../controllers/mealController';

const router = express.Router();

router.get('/', getMeals);
router.get('/:id', getMeal);
router.post('/', createMeal);
router.patch('/:id', updateMeal);
router.delete('/:id', deleteMeal);
