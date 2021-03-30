import mongoose from 'mongoose';

const MealSchema = new mongoose.Schema({
  name: String,
  category: String,
  amount: String,
  calories: Number,
  protein: Number,
  carbohydrates: Number,
  fat: Number,
  fiber: Number,
});

const Meal = mongoose.model('meal', MealSchema);

export default Meal;
