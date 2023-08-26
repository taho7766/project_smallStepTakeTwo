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
            console.error('Error:' error);
        });
    };
}