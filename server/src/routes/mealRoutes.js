import express from 'express';
import {
  getMeals, getMeal, createMeal, updateMeal, deleteMeal,
} from '../controllers/mealController.js';
import auth from '../middleware/auth.js';
  
const router = express.Router();

router.get('/', getMeals);
router.get('/:id', getMeal);
router.post('/', auth, createMeal);
router.patch('/:id', auth, updateMeal);
router.delete('/:id', auth, deleteMeal);

export default router;
