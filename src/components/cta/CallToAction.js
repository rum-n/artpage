import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section>
            <div className='cta-wrapper'>
                <div className='cta-text'>
                    <h2>Ready to get started?</h2>
                    <h3>Join now and create your art page</h3>
                </div>
                <div className='buttons-wrapper'>
                    <a><button className='cta-btn'>Join now</button></a>
                    <Link to='/artists'><button className='cta-examples'>See all artists</button></Link>
                </div>
            </div>
        </section>
    )
}

export default CallToAction; 