import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewProject = (props) => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const { id  } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:5000/projects/${id}`)
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
                    setProjects(data);
                }
            })
            .catch(error => setError(error.message));
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!projects) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{projects.title}</h1>
            <p>{projects.description}</p>
            <p>Technologies: {projects.technologies.join(', ')}</p>
            <img src={projects.imageURL} alt={projects.title} />
            <a href={projects.projectURL} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ViewProject;
