import User from '../models/users.js';
import bycrypt from 'bcryptjs';
import { formatUserResponse } from '../utils/formatUserResponse.js';
import { generateToken } from '../utils/generateToken.js';

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password, phone, age, gender } =
    req.body;
  try {
    console.log('Received data:', req.body);
    const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUsername || existingEmail) {
      let message = 'User already exists: ';
      if (existingUsername) message += 'Username is taken. ';
      if (existingEmail) message += 'Email is already registered.';

      return res.status(400).json({
        success: false,
        message: message.trim(),
      });
    }

    const hashedPassword = await bycrypt.hash(password, 10);
    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      phone,
      age,
      gender,
    };
    const user = await new User(newUser).save();
    const token = generateToken(user._id, user.email, user.username);
    const userResponse = formatUserResponse(user);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: userResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.email, user.username);

    const userResponse = formatUserResponse(user);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: userResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID format',
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const userResponse = formatUserResponse(user);

    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      user: userResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};
