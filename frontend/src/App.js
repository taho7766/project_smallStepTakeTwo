import React, { useState, useEffect, useContext } from 'react';
import './assets/css/App.css';
import Router from './routes/Router';
import AuthProvider from './contexts/AuthContext';
import Loader from './components/Loader.js';
import './assets/css/global.css'


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <div className='loading-screen'><Loader /></div>;
  }

  return (
    <div className='App'>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
