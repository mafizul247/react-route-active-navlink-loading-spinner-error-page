import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-link'>
            <NavLink to='/' className={({ isActive }) => isActive && "active"}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive && "active"}>About</NavLink>
            <NavLink to='/user' className={({ isActive }) => isActive && "active"}>User</NavLink>
        </div>
    );
};

export default Header;