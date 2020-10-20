import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
// import logo from './../../assets/logo.png';

const Nav = () => {
    
    return (
        <header>
            <NavLink to='/'>
                <div className='logo'>
                    <h1>artpage</h1>
                </div>
            </NavLink>
            <nav>
                <ul className='menu'>
                    <li><NavLink className='main-blue' to='/main'><button>Join Now</button></NavLink></li>
                </ul>
            </nav>         
        </header>
    )
};

export default Nav;