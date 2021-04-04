import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  creator: String,
  date: {type: String, required: true, default: new Date()},
  breakfast: [String],
  lunch: [String],
  dinner: [String],
  snacks: [String],
})

export default mongoose.model('log', logSchema);