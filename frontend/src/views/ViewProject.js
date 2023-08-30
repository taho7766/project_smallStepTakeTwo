import React, { useState, useEffect } from 'react';

const ViewProject = (props) => {
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${props.match.params.id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.message) {
                    setError(data.message);
                } else {
                    setProject(data);
                }
            })
            .catch(error => setError(error.message));
    }, [props.match.params.id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(', ')}</p>
            <img src={project.imageURL} alt={project.title} />
            <a href={project.projectURL} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ViewProject;
