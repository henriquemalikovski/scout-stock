import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './db/conn.js'
import router from './routes/router.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Scout Stock Express!');
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})