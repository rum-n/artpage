import React from 'react';
import './styles.css';
import headerimg from './../../assets/header-img.png';
import Features from './../../components/features/Features';
import Examples from '../../components/examples/Examples';
import CallToAction from '../../components/cta/CallToAction';
import Footer from './../../components/footer/Footer';
import Nav from './../../components/nav/Nav';

const Home = () => {
  return (
    <React.Fragment>
      <Nav/>
      <div className='main'>
          <h1 className='title'>Your own personal art gallery</h1>
          <p className='subtitle'>Display your artwork in a personalized online space. <br/>Share it with the world and get discovered by potential buyers.</p>
          <div className='header-buttons'>
            <button className='cta-btn'>Join Now</button>
          </div>
          <div className='header-img'>
            <img src={headerimg} alt='Artpage example'/>
          </div>
          <h2 className='feature-title'>Your very own space on the web</h2>
          <Features/>
          <h2 className='feature-title'>Featured artists</h2>
          <Examples/>
          <CallToAction/>
          <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Home;