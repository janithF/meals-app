import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <h6><NavLink to='/home/menu' activeClassName='active'>Menu</NavLink></h6>
            <h6><NavLink to='/about' activeClassName='active'>About</NavLink></h6>
            <h6><NavLink to='/contact' activeClassName='active'>Contact Us</NavLink></h6>
        </nav>
    );
};

export default Navbar;