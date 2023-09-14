import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../assets/css/ListProjects.css';
import { getProjects, deleteProject } from '../utils/api';


const ListProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const response = await getProjects();
                setProjects(response.data);
            } catch (error) {
                setError('Error fetching data. Please try again');
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const navigateToEditPage = (id) => {
        navigate(`/edit/${id}`);
    }

    const handleDeleteProject = async (id) => {
        try {
            await deleteProject(id);
            setProjects(projects.filter(project => project._id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;    

    return (
        <>
            {console.log(projects)}
            <div className='list-projects-container'>
                <h1>Projects</h1>
                {projects.length === 0 ? (
                    <p>No projects to display.</p>
                ) : (
                    <div className='projects'>
                        {projects.map(project => (
                            <div className='project-preview' key={project._id}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <Link to={`/view/${project._id}`}>View More</Link>
                                {isAuthenticated && 
                                    <div className='admin-options'>
                                        <button onClick={() => navigateToEditPage(project._id)}>Edit</button>
                                        <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default ListProjects;