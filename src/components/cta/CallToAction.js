import React from 'react';
import './styles.css';

const CallToAction = () => {
    return (
        <section>
            <div className='cta-wrapper'>
                <div className='cta-text'>
                    <h2>Ready to get started?</h2>
                    <h3>Join now and create your art page</h3>
                </div>
                <div className='buttons-wrapper'>
                    <button className='cta-btn'>Join now</button>
                    <button className='cta-examples'>See all artists</button>
                </div>
            </div>
        </section>
    )
}

export default CallToAction; 