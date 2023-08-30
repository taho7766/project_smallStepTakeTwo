import React from 'react';
import './App.css';
import Router from './Router';
import LoadingScreen from './components/LoadingScreen';
import IntroPage from './components/IntroPage';


function App() {
  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
