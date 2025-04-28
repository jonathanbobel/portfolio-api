// routes/projects.js
const express = require('express');
const router = express.Router();

// Sample project data
const projects = [
  { id: 1, name: 'Project 1', description: 'This is project 1', technologies: ['Node.js', 'Express', 'MongoDB'] },
  { id: 2, name: 'Project 2', description: 'This is project 2', technologies: ['React', 'Node.js', 'PostgreSQL'] },
];

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
