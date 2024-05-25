import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import defaultServerConfig from "../common/server-info.ts";
import Recipe from "../types/Recipe.ts";

const Home: React.FC = () => {
    const { apiUrl } = defaultServerConfig
    const [recipes, setRecipes] = useState<Array<Recipe>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace the URL with the endpoint you want to fetch data from
        axios.get(`${apiUrl}/api/recipes`)
            .then(async response => {
                setRecipes(response.data);
                setLoading(false);
            })
            .catch(error => {
                // alert(error)
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes: {error.message}</p>;

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
