const Project = require('../models/Project');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};

const createProject = async (req, res) => {
    const { title, description, technologies, imageURL, projectURL} = req.body;

    try {
        const newProject = new Project({
            title,
            description,
            technologies,
            imageURL,
            projectURL,
        });

        const savedProject = await newProject.save();

        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: 'Error creating the project', error: error.message});
    }
};

module.exports = {
    createProject
};