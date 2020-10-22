import React from 'react';
import './styles.css';
// import logo from './../../assets/logo.png';
// import { NavLink } from 'react-router-dom';

const Artist = () => {
    return (
        <div className='main'>
            <h1>Welcome to Doni's art gallery</h1>
            <div className='artwork-wrapper'>
                <div className='artpiece'></div>
                <div className='artpiece'></div>
                <div className='artpiece'></div>
            </div>
            <h2>About Doni</h2>
            <h2>External links</h2>
            <h2>How to buy</h2>
        </div>
    )
}

export default Artist;