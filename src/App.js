import React from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/home/home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
