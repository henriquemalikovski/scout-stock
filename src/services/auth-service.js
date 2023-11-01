import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config();

const authService = {
  genereteToken: async (data) => {
    return jwt.sign(data, process.env.SALT_KEY, { expiresIn: '1d' })
  },
  decodeToken: async (token) => {
    const data = await jwt.verify(token, global.SALT_KEY)
    return data
  },
  authorize: (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token) {
      res.status(401).json({
        message: 'Unauthorized access'
      })
    } else {
      jwt.verify(token, process.env.SALT_KEY, (error, decoded) => {
        if (error) {
          res.status(401).json({
            message: 'Invalid token'
          })
        } else {
          next()
        }
      })
    }
  },
  isAdmin: (req, res, next) => {
    var token = req.headers['x-access-token']

    if (!token) {
      res.status(401).json({
        message: 'Unauthorized access'
      })
    } else {
      jwt.verify(token, process.env.SALT_KEY, function (error, decoded) {
        if (error) {
          res.status(401).json({
            message: 'Invalid token'
          })
        } else {
          if (decoded.roles.includes('admin')) {
            next()
          } else {
            res.status(401).json({
              message: 'This functionality is restricted to administrators'
            })
          }
        }
      })
    }
  }
}

export default authService