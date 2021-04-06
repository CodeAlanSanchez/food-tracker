import mongoose from 'mongoose';
import Meal from '../../../client/src/components/Meals/Meal/Meal.jsx';
import Log from '../models/logModel.js';

export const getLogsFromId = (req, res) => {
  try {
    const { id: _id } = req.params;

    const data = await Log.find({ creator: _id });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createLog = (req, res) => {
  const log = req.body;
  const { id: _id } = req.params;
  try {
    const savedLog = new Log({ log, creator: req.userId });

    Log.save(savedLog);

    res.status(201).json(savedLog);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateLog = (req, res) => {
  const { id: _id } = req.params;
  try {
    const newLog = new Log(req.body);

    const log = await Log.findById(_id);

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Log not found');

    if (!Log.findById(_id).creator === req.userId) return res.status(401).send('Bad auth');

    const updatedLog = await Log.findByIdAndUpdate(_id, {_id, newLog});

    res.status(200).json(updatedLog);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}