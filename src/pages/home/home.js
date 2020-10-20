import React from 'react';
import './styles.css';
import headerimg from './../../assets/header-img.png';
import Features from './../../components/features/Features';
import Examples from '../../components/examples/Examples';
import CallToAction from '../../components/cta/CallToAction';

const Home = () => {
  return (
    <div className='main'>
        <h1 className='title'>Your own personal art gallery</h1>
        <p className='subtitle'>Display your artwork in a personalized online space. <br/>Share it with the world and get discovered by potential buyers.</p>
        <div className='header-buttons'>
          <button className='cta-btn'>Join Now</button>
        </div>
        <div className='header-img'>
          <img src={headerimg} alt='Artpage example'/>
        </div>
        <Features/>
        <h1>Featured artists</h1>
        <Examples/>
        <CallToAction/>
    </div>
  );
}

export default Home;