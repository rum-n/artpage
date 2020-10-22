import React from 'react';
import './styles.css';
import wcb1 from './../../assets/wcb-1.png';
import wcb2 from './../../assets/wcb-2.png';
import wcb3 from './../../assets/wcb-3.png';

const Features = () => {
    return (
        <section>
            <div className='features-wrapper'>
                <div className='feature'>
                    {/* <svg className='svg-blob' viewBox="0 0 377 340" xmlns="http://www.w3.org/2000/svg"><g><g><path fill="#87cc6c" d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z"></path></g></g></svg> */}
                    <img className='svg-blob' src={wcb1} alt='Watercolor Background'/>
                    <h3 className='feature-name'>Super easy <br/>set up</h3>
                    <p className='feature-details'>With just a few clicks you'll have a personal online art gallery to where you can share your artwork with anyone.</p>
                </div>
                <div className='feature'>
                    {/* <svg className='svg-blob' viewBox="0 0 358 372" xmlns="http://www.w3.org/2000/svg"><g><g><path fill="#e27797" d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z"></path></g></g></svg> */}
                    <img className='svg-blob' src={wcb2} alt='Watercolor Background'/>
                    <h3 className='feature-name'>All your art <br/>in one place</h3>
                    <p className='feature-details'>Upload as many paintings as you want. Write a personal bio and let potential buyers know how they can contact you.</p>
                </div>
                <div className='feature'>
                    {/* <svg className='svg-blob' viewBox="0 0 378 410" xmlns="http://www.w3.org/2000/svg"><g><g><path fill="#f0af19" d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z"></path></g></g></svg> */}
                    <img className='svg-blob' src={wcb3} alt='Watercolor Background'/>
                    <h3 className='feature-name'>Minimalist <br/>design</h3>
                    <p className='feature-details'>Display your art in a way that doesn't distract the visitor from what's truely important - your work.</p>
                </div>
            </div>
        </section>
    )
}

export default Features; 