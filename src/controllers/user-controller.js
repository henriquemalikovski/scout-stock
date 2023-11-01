import User from "../models/user.js";
import md5 from 'md5';
import * as dotenv from 'dotenv'
dotenv.config();

async function verifyEmail(email) {
  const res = await User.findOne({
    email: email
  })
  return res
}

const userController = {
  create: async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = await verifyEmail(email);
    if (userExists) {
      res.status(400).json({ message: 'Email already exists' })
      return
    }

    const user = {
      name,
      email,
      password: md5(password + process.env.SALT_KEY),
      role: role || 'user'
    };
    try {
      const savedUser = await User.create(user)
      res.status(201).json(savedUser)
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).json(deletedUser);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find({}, { _id: 1, name: 1, email: 1, role: 1 });
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message })
    }
  }
}

export default userController;