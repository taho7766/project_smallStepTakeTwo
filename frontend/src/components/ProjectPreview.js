import React, { useContext } from 'react';
import '../assets/css/PrjectPreview.css';
import { AuthContext } from '../AuthContext';

const ProjectPreview = ({ project }) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className='project-preview'>
            <img src={project.imageURL} alt={project.title} />
            <div className='project-preview-content'>
                <h2>{project.title}</h2>
                <p>{project.discription}</p>
                <p>Technologies: {project.technologies}</p>
                {isAuthenticated && (
                    <div className='project-preview-options'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectPreview;