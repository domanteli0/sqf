import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import Button from './Button.tsx';

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const sessionKey = localStorage.getItem('sessionKey');
        if (sessionKey) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <header>
            <h1>Slay Queen Recipes</h1>
            <nav>
                <Button onClick={() => window.location.href = '/'} text="Home" />
                <a href="/">Home</a>
                {!isLoggedIn && <a href="/register">Register</a>}
                {!isLoggedIn && <a href="/login">Login</a>}
                {isLoggedIn && <a href="/create">Create Recipe</a>}
            </nav>
        </header>
    );
};

export default Header;
