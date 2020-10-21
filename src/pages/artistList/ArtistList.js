import React from 'react';
import './styles.css';
// import logo from './../../assets/logo.png';
// import { NavLink } from 'react-router-dom';

const ArtistList = () => {
    return (
        <div className='main'>
            <h1>All artists</h1>
            <div className='artists-wrapper'>
                <div className='artist-card'></div>
                <div className='artist-card'></div>
                <div className='artist-card'></div>
            </div>
        </div>     
    )
}

export default ArtistList; 