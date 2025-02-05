import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

// Define the root route
app.get('/', (req, res) => {
  res.send('GroupWise backend');
});
