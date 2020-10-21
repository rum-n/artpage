import React from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/home/home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artist from './pages/artist/artist';
import ArtistList from './pages/artistList/ArtistList';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/artists' component={ArtistList} />
        {/* <Route path='/:id' component={Artist} /> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
