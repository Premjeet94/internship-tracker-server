import { User } from "../Models/user.model";
import bcrypt from "bcryptjs";
import { GenerateToken } from "../Utils/GenerateToken";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All Fields are Requied" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hash,
    });
    res.status(201).json({
      token: GenerateToken(user._id),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credentials" });
    }
    res
      .status(200)
      .json({
        token: GenerateToken(user._id),
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error) {
    res.status(500).json({message:'Server Error'})
  }
};
