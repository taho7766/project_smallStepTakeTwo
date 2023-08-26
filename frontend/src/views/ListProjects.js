import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom;';

const ListProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            {projects.map(project => (
                <div key={project._id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <Link to={`/projects/${project._id}`}>View More</Link>
                </div>
            ))}
        </div>
    );
}

export default ListProjects;