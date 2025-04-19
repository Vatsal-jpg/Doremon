const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  console.log('Registration request received:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('User registered successfully');

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login User
router.post('/login', async (req, res) => {
  console.log('🔵 Login request received');
  const { email, password,username,role } = req.body;
  console.log('Login Data:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('❌ Invalid email');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('❌ Incorrect password');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('✅ Login successful');
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('❌ Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
