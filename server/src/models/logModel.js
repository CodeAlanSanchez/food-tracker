import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  creator: String,
  date: { type: String, required: true, default: new Date() },
  breakfast: { type: [String], required: true, default: [] },
  lunch: { type: [String], required: true, default: [] },
  dinner: { type: [String], required: true, default: [] },
  snacks: { type: [String], required: true, default: [] },
})

export default mongoose.model('log', logSchema);