import React from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const Home: React.FC = () => {
    // Mock data
    const recipes = [
        { id: '1', title: 'Recipe 1', duration: '15 min' },
        { id: '2', title: 'Recipe 2', duration: '10 min' },
        { id: '3', title: 'Recipe 3', duration: '5 min' },
    ];

    return (
        <div>
            <Header/>
            <main>
                <h2>Best recipe results</h2>
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} duration={recipe.duration}/>
                ))}
            </main>
        </div>
    );

};


export default Home;
