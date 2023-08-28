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
        fetch(`http://localhost:5000/projects/${id}`)
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
}