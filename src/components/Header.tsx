import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Slay Queen Recipes</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        </header>
    );
};

export default Header;
