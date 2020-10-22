import React from 'react';
import Home from './pages/home/home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artist from './pages/artist/artist';
import ArtistList from './pages/artistList/ArtistList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/artists' component={ArtistList} />
        <Route path='/doni' component={Artist} />
      </Switch>
    </Router>
  );
}

export default App;
