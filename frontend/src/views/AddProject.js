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

    
}