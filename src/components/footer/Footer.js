import React from 'react';
import './styles.css';
import logo from './../../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <hr/>
        <footer>
            <div className='footer-logo'>
                <NavLink to='/'><img src={logo} alt='Podcast Chatterbox logo'/></NavLink>
                {/* <p>© 2020 Artpage.</p> */}
            </div>
            <div>
                <h4>Twitter</h4>
                {/* <p><NavLink className='main-blue' to='/hosts'>For Hosts</NavLink></p>
                <p><NavLink className='main-blue' to='/guests'>For Guests</NavLink></p> */}
            </div>
            <div>
                <h4>Instagram</h4>
                {/* <p>for any bugs or feature requests</p>
                <p>reach out via <a href='https://twitter.com/room_n'>Twitter</a></p> */}
            </div>
            <div>
                <h4>Pinterest</h4>
            </div>
        </footer>
        </React.Fragment>
    )
}

export default Footer; 