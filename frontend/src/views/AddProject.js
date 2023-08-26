import React, { useState } from 'react';

const AddProject = () => {
    const [project, setProject] = useState({
        title: '',
        description: '',
        technologies: '',
        imageURL: '',
        projectURL: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1>Add Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <lable>Title</lable>
                    <input type='text' name='title' value={project.title} onChange={handleChange} required />
                </div>
                <div>
                    <lable>description</lable>
                    <textarea name='description' value={project.description} onChange={handleChange} required></textarea>
                </div>
                <div>
                    <lable>Technologies</lable>
                    <input type='text' name='technologies' value={project.technologies} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image URL</label>
                    <input type='text' name='imageURL' value={project.imageURL} onChange={handleChange} />
                </div>
                <div>
                    <label>ProjectURL</label>
                    <input type='url' name='projectURL' value={project.projectURL} onChange={handleChange} required />
                </div>
                <button type='submit'>Add Project</button>
            </form>
        </div>
    );
};

export default AddProject;