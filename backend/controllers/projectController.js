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

const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found'});
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message});
    }
}

const updateProject = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);
        if(!project) {
            return res.status(404).json({ message: 'Project not found'});
        }
        project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found'});
        }

        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Project deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Server Error', error: error.message });
    }
}

module.exports = {
    getProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
};