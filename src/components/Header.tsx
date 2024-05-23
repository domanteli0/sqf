import React from 'react';
import '../styles/Header.css';
import './Button';
import Button from "./Button.tsx";

const Header: React.FC = () => {
    return (
        <header>
            <h1>Slay Queen Recipes</h1>
            <nav>
                <Button onClick="TODO" text="Home" />
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
                <a href="/create">Create Recipe</a>
            </nav>
        </header>
    );
};

export default Header;
