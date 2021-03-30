import mongoose from 'mongoose';
import Meal from '../models/mealModel';

export const getMeals = async (req, res) => {
  try {
    const data = await Meal.find();

    res.status.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMeal = async (req, res) => {
  const { id: _id } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send('Meal not found');

    const meal = Meal.findById(_id);

    res.status(200).json(meal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMeal = async (req, res) => {
  const meal = req.body;
  try {
    const newMeal = new Meal(meal);

    await newMeal.save();

    res.status(201).json(newMeal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMeal = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const meal = new Meal(req.body);

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Meal not found');

    const updatedMeal = await Meal.findByIdAndUpdate(_id, { ...meal, _id }, { new: true });

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMeal = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Meal not found');

    const deletedMeal = await Meal.findByIdAndDelete(_id)
      .catch(() => res.status(404).send('Meal not found'));

    res.status(200).json(deletedMeal);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
