import React from 'react';
import Header from '../components/Header';
import '../styles/Login.css';

const Login: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Log in</h2>
                <form>
                    <label>
                        Username
                        <input type="text" placeholder="Your username" />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Your password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </main>
        </div>
    );
};

export default Login;
