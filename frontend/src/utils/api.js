import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

export const register = (userData) => api.post('/register', userData);
export const login = (credentials) => api.post('/login', credentials);
export const requestPasswordReset = (email) => api.post('/request-password-reset', email);
export const resetPassword = (data) => api.post('/reset-password', data);
export const updateUser = (userData) => api.patch('/me', userData);
export const deleteUser = () => api.delete('/me');
export const getProjects = () => api.get('/projects');
export const createProject = (projectData) => api.post('/', projectData);
export const getProjectById = (id) => api.get(`/${id}`);
export const updateProject = (id, projectData) => api.put(`/${id}`, projectData);
export const deleteProject = (id) => api.delete(`/${id}`);

const apis = {
    register,
    login,
    requestPasswordReset,
    resetPassword,
    updateUser,
    deleteUser,
    getProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
}

export default apis;