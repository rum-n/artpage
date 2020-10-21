import React from 'react';
import './styles.css';
import sleepingfox from './../../assets/foxy.jpg';
import violin from './../../assets/violin.jpeg';

const Features = () => {
    return (
        <section>
            <div className='features-wrapper'>

                <div className='feature-left'>
                    <div className='feature-text'>
                        <h2 className='feature-title'>Your very own space on the web</h2>
                        <p className='feature-details'>With just a few clicks you'll have a personal online art gallery to display your artwork. You can then share the link with anyone interested to see your art.</p>
                    </div>
                    <div className='feature-img'>
                        <img src={sleepingfox} alt='Sleeping Fox' />
                    </div>
                </div>
                <div className='feature-right'>
                    <div className='feature-img'>
                        <img src={sleepingfox} alt='Three fishes' />
                    </div>
                    <div className='feature-text'>
                        <h2 className='feature-title'>Your very own space on the web</h2>
                        <p className='feature-details'>With just a few clicks you'll have a personal online art gallery to display your artwork. You can then share the link with anyone interested to see your art.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features; 