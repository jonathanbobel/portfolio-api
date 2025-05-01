// routes/projects.js
const express = require('express');
const router = express.Router();

// Sample project data
const projects = require('../data/projects.json');

// GET all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// GET a specific project by ID
router.get('/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  
  res.json(project);
});

module.exports = router;
