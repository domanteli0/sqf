import React from 'react';
import Header from '../components/Header';
import '../styles/Register.css';

const Register: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Create account</h2>
                <form>
                    <label>
                        Username
                        <input type="text" placeholder="Your username" />
                    </label>
                    <label>
                        First name
                        <input type="text" placeholder="Your first name" />
                    </label>
                    <label>
                        Last name
                        <input type="text" placeholder="Your last name" />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="Your email" />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="Your password" />
                    </label>
                    <button type="submit">Register</button>
                </form>
            </main>
        </div>
    );
};

export default Register;
