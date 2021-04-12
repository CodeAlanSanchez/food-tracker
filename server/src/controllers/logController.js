import mongoose from 'mongoose';
import Log from '../models/logModel.js';

export const getLogs = async (req, res) => {
  try {
    const data = await Log.find({ creator: req.userId });

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createLog = async (req, res) => {
  const log = req.body;
  try {
    const existingLogs = await Log.find({ creator: req.userId });
    console.log(existingLogs);

    const today = new Date();

    if (existingLogs) {
      const oldDate = new Date(log.date);
      const existingLog = existingLogs.find((log) => oldDate.getFullYear() === today.getFullYear &&
      oldDate.getMonth() === today.getMonth() &&
      oldDate.getDate() === today.getDate())
      return res.status(200).json(existingLog);
    }

    const savedLog = new Log({ ...log, creator: req.userId, date: new Date() });

    await savedLog.save();

    res.status(201).json(savedLog);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updateLog = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const newLog = new Log(req.body);

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Log not found');

    if (!Log.findById(_id).creator === req.userId) return res.status(401).send('Bad auth');

    const updatedLog = await Log.findByIdAndUpdate(_id, {_id, newLog});

    res.status(200).json(updatedLog);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}