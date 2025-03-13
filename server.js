const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // ✅ Path to config/db.js

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
