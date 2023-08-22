const express = require('express');
const router = express.Router();
const { getProjects, createProject, getProjectById, updateProject, deleteProject } = require('../controllers/projectController');

router.get('/', getProjects); // Lists all projects
router.post('/', createProject); // Adds a new project
router.get('/:id', getProjectById); // TODO: Implement this
router.put('/:id', updateProject); // TODO: Implement this
router.delete('/:id', deleteProject); // TODO: Implement this

module.exports = router;
