import mongoose from 'mongoose';
import User from '../models/userModel.js';

export const signin = (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json("User doesn't exist.");

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) return res.status(400).send("Invalid credentials.")

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
}

export const signup = (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).send("User already exists.");

    if (password !== confirmPassword) return res.status.send("Passwords don\'t match.");

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword });

    const token = jwt.sign({ email: result.email, id: result._id });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}