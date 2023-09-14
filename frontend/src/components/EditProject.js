import React, { useState, useEffect } from 'react';

const EditProject = (props) => {
    const [project, setProject] = useState({
        title: '',
        description: '',
        technologies: [],
        imageURL: '',
        projectURL: ''
    });

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${props.match.params.id}`)
            .then(response => response.json())
            .then(data => setProject(data))
            .catch(error => console.error('Error:', error));
    }, [props.match.params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/projects/${props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Project updated', data);
                props.history.push(`/projects/${props.match.params.id}`);
            });
    }

    return (
        <div>
            <h1>Edit Project</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' name='title' value={project.title} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name='description' value={project.description} onChange={handleChange} required></textarea>
                </div>
                <div>
                    <label>Technologies</label>
                    <input type='text' name='technologies' value={project.technologies} onChange={handleChange} required />
                </div>
                <div>
                    <label>Image URL</label>
                    <input type='text' name='imageURL' value={project.imageURL} onChange={handleChange} />
                </div>
                <div>
                    <lable>Project URL</lable>
                    <input type='url' name='projectURL' value={project.projectURL} onChange={handleChange} required />
                </div>
                <button type='submit'>Update Project</button>
            </form>
        </div>
    );
}

export default EditProject;