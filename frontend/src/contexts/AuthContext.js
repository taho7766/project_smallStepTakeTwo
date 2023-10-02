import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                await axios.get('/check-auth');
                setIsAuthenticated(true);
            } catch (error) {
                console.trace(error);
                setIsAuthenticated(false);
            }
        };

        checkAuthentication();
    }, []);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;