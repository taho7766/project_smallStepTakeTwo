const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectControllers');

router.get('/', getProjects); // Lists all projects
router.post('/', createProject); // Adds a new project
router.get('/:id', (req, res) => res.send('Get a specific project by its ID')); // TODO: Implement this
router.put('/:id', (req, res) => res.send('Update a specfic project')); // TODO: Implement this
router.delete('/:id', (req, res) => res.send('Delete a project')); // TODO: Implement this

module.exports = router;
