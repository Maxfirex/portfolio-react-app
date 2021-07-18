import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import './App.scss';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <div>
        <Navbar />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
