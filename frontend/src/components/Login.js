import Cookies from 'js-cookies';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', credentials);
            console.log('Success:', response.data);
            Cookies.set('token', response.data.token);
            navigate('/');
        } catch (error) {
            console.error('Error:', error.response.data);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <lable>Username</lable>
                    <input type='username' name='username' value={credentials.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;