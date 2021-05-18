import mongoose from 'mongoose';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === 'guest') {
      const token = jwt.sign({ email: 'guest', id: '6067589f421b7304d90f4a5c'}, process.env.JWT_SECRET, {expiresIn: '1h'});

      return res.status(200).json({ result: { email, _id: '6067589f421b7304d90f4a5c' }, token });
    }
    const existingUser = await User.findOne({ email });
    
    if (!existingUser) return res.status(404).json({ message: 'User doesn\'t exist.' });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' })

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const signup = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    
    if (existingUser) return res.status(400).json({ message: 'User aready exists' });
    
    if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords don\'t match.' });
    
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword });

    const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}