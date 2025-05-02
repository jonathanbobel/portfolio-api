// server.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const projectsRouter = require('./routes/projects');
const allowedOrigins = ['http://localhost:8080', 'https://www.jonathanbobel.com'];

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/projects', projectsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Portfolio API is running 🎉');
});

app.get('/ping', (req, res) => {
  console.log('Received /ping');
  res.send('pong');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
