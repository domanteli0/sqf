import React from 'react';
import Header from '../components/Header';
import '../styles/Form.css';

const Login: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="register-form-container">
                <h2>Log in</h2>
                <form className="register-form">
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
