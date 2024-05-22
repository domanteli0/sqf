import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import RecipeDetail from './pages/RecipeDetail';
import CreateRecipe from './pages/CreateRecipe';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/recipe/:id" element={<RecipeDetail/>} />
                    <Route path="/create" element={<CreateRecipe/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
