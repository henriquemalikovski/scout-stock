import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './db/conn.js'
import router from './routes/router.js'
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from './swagger.json' assert {type: 'json'};

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connectDB();

app.use('/api', router);
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
  res.status(200).json({ "mensage": "Scout Stock Express!" });
})

app.use('/api/caf', (req, res) => {
  res.status(200).json({
    "total_docs": 250,
    "docs_5min": 55,
    "docs_10min": 20,
    "docs_15min": 15,
  });
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})