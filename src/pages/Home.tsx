import React from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Best recipe results</h2>
                <RecipeCard title="Recipe 1" duration="15 min" />
                <RecipeCard title="Recipe 2" duration="10 min" />
                <RecipeCard title="Recipe 3" duration="5 min" />
            </main>
        </div>
    );
};

export default Home;
