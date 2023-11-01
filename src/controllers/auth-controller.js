import User from "../models/user.js";
import authService from "../services/auth-service.js";
import md5 from 'md5';
import * as dotenv from 'dotenv'
import { log } from "console";
dotenv.config();

async function verifyCredentials(data) {
  const res = await User.findOne({
    email: data.email,
    password: data.password
  })
  return res
}

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await verifyCredentials({ email, password: md5(password + process.env.SALT_KEY) })
      if (!user) {
        res.status(401).json({ message: 'Invalid credentials' })
        return
      }
      const token = await authService.genereteToken({
        id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
        roles: user.role
      })
      res.status(200).send({
        token: token,
        data: {
          email: user.email,
          name: user.name
        }
      })
    } catch (e) {
      res
        .status(400)
        .send({ mensage: "Failed to login user", data: e })
    }
  }
}

export default authController;