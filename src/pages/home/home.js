import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div className='main'>
        <h1 className='title'>Your own personal art gallery</h1>
        <p className='subtitle'>Display your artwork in a personalized online space. <br/>Share it with the world and get discovered by potential buyers.</p>
        <div className='header-buttons'>
          <button className='cta-btn'>Join Now</button>
        </div>
    </div>
  );
}

export default Home;