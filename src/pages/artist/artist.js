import React from 'react';
import './styles.css';
// import logo from './../../assets/logo.png';
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaEtsy } from "react-icons/fa";
import { SiSociety6 } from "react-icons/si";

const Artist = () => {
    return (
        <div className='main'>
            <h1>Welcome to Doni's art gallery</h1>
            <div className="artist-info">
                <div className='artist-bio'>
                    <h2>About Doni</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt maximus erat, ac elementum sem scelerisque a. Nam sit amet metus in ex sodales porttitor. Etiam facilisis pellentesque ex vel sollicitudin. In non urna lacus. Nunc sed gravida augue, non ullamcorper odio. Duis auctor fringilla dictum. Nam venenatis pulvinar libero, id rutrum lacus pharetra gravida. Curabitur bibendum accumsan pellentesque. Morbi odio dolor, semper non est nec, vehicula blandit nulla. Duis tempor in velit sodales porttitor. Nunc elit dolor, efficitur feugiat enim ac, egestas sodales neque. Praesent pulvinar ut purus quis tincidunt.</p>
                </div>
                <div className='external-links'>
                    <h2>External links</h2>
                    <div className="external-link-icons">
                        <a href="https://www.instagram.com/nordkins/"><GrInstagram/></a>
                        <a href="https://www.etsy.com/shop/Nordkins"><FaEtsy/></a>
                        <a href="https://www.twitter.com/Nordkins"><GrTwitter/></a>
                        <a href='https://society6.com/nordkins'><SiSociety6/></a>
                    </div>
                </div>
                <div className='buy-info'>
                    <h2>How to buy</h2>
                    <ol>
                        <li>Feel free to browse through my online shop at <a href="https://www.etsy.com/shop/Nordkins">Etsy</a> and order any of the prints you like there.</li>
                        <li>Contact me directly and I'd be happy to take your order and ship it to you personally.</li>
                    </ol>            
                </div>
            </div>
            <div className='artwork-wrapper'>
                <div className='artpiece'></div>
                <div className='artpiece'></div>
                <div className='artpiece'></div>
                <div className='artpiece'></div>
            </div>
        </div>
    )
}

export default Artist;