import mongoose from 'mongoose';

const MealSchema = mongoose.Schema({
  name: String,
  category: String,
  amount: String,
  calories: Number,
  protein: Number,
  carbohydrates: Number,
  fat: Number,
  fiber: Number,
});

const Meal = mongoose.Model(MealSchema, 'meal');

export default Meal;
