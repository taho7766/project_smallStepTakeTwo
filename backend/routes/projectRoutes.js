const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { getProjects, createProject, getProjectById, updateProject, deleteProject } = require('../controllers/projectController');

router.get('/', getProjects); // Lists all projects
router.post('/', auth, createProject); // Adds a new project
router.get('/:id', getProjectById);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

module.exports = router;
