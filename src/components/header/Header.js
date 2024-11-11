import React from 'react';
import './Header.css'
import Theme from '../../Theme';

function Header() {

    return (
        <div className="nav-container">
            <nav className='navbar'>
                <img className='nav-images logo-img' src={require('../../assets/logo.png')} alt="" />
                <h1 className='header-text'>Book Finder</h1>
                <Theme />
            </nav>
        </div>
    )
}

export default Header