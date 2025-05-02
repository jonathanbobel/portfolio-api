// server.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const projectsRouter = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/projects', projectsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Portfolio API is running 🎉');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
