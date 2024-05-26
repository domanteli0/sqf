import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import defaultServerConfig from "../common/server-info.ts";
import Recipe from "../types/Recipe.ts";
import "../styles/Home.css";
import placeholder from "../assets/placeholder.jpeg";
import Button from "../components/Button.tsx";

const Home: React.FC = () => {
    const {apiUrl} = defaultServerConfig;
    const [recipes, setRecipes] = useState<Array<Recipe>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`${apiUrl}/api/recipes`)
            .then(async response => {
                setRecipes(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search functionality here if needed
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes: {error.message}</p>;

    return (
        <div className="home-container">
            <Header/>
            <div className="welcome-section">
                <h1>Welcome to Slay Queen Recipes – quick, easy, and delish meals for students!</h1>
                <img src={placeholder} alt="Delicious meal" className="welcome-image"/>
            </div>
            <main className='home-container'>
                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button text="Search" type="submit"/>
                </form>
                <h2>Best recipe results</h2>
                <div className="recipe-list">
                    {recipes.map((recipe) => (
                        <RecipeCard id={recipe.id} title={recipe.title}
                                    duration={`${recipe.cookTime + recipe.prepTime} min.`}/>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
