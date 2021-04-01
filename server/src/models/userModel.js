import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  id: {type: String}
})

export default mongoose.model('user', userSchema);