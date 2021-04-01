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

export default mongoose.model('meal', MealSchema);
