import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import defaultServerConfig from "../common/server-info.ts";
import Recipe from "../types/Recipe.ts";
import "../styles/Home.css";
import placeholder from "../assets/placeholder.jpeg";
import Button from "../components/Button.tsx";
import recipe from "../types/Recipe.ts";
import {useNavigate, useSearchParams} from "react-router-dom";

const SearchResult: React.FC = () => {
    const {apiUrl} = defaultServerConfig;
    const [recipes, setRecipes] = useState<Array<Recipe>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchParams] = useSearchParams();

    console.debug("SEARCH PARAM")
    console.debug(searchParams.get("searchTerm"))

    // setSearchText(`${searchParams.get("searchTerm")}` ?? "")
    // const navigate = useNavigate();

    fetch(`${apiUrl}/api/search?searchTerm=${searchText}`,
        {
            method: "GET",
        }
    )
        .then(async response => {
            setRecipes(response.data);
            setRecipes(recipes.map((recipe, index) => {
                recipe.id = index;
                return recipe;
            }));
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes: {error.message}</p>;

    return (
        <div className="home-container">
            <Header/>
            <main className='home-container'>
                <form className="search-bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        // onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        text="Search"
                        type="submit"
                        // onClick={() => handleSearchClick()}
                    />
                </form>
                <h2>Best recipe results</h2>
                {recipes.toString()}
                {/*<div className="recipe-list">*/}
                {/*    {recipes.map((recipe) => (*/}
                {/*        <RecipeCard id={recipe.id} title={recipe.title}*/}
                {/*                    duration={`${recipe.cookTime + recipe.prepTime} min.`}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </main>
        </div>
    );
};

export default SearchResult;
