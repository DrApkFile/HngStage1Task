const express = require('express');
const cors = require('cors');
const numberController = require('./src/controllers/numberController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/classify-number', numberController.classifyNumber);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});