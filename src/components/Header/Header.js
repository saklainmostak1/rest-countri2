import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <a href="home">Home</a><a href="blog">Blog</a><a href="about">About</a>
            </nav>
        </div>
    );
};

export default Header;