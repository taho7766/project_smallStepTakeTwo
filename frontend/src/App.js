import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import IntroPage from './components/IntroPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/intro" component={IntroPage} />
        <Route path="/" exact component={LoadingScreen} />
      </Switch>
    </Router>
  );
}

export default App;
