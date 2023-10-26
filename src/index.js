require('dotenv/config')
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/conn.js')
const router = require('./routes/router.js')

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