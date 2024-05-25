import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/RecipeDetail.css';
import axios from "axios";
import defaultServerConfig from "../common/server-info.ts";
import Recipe from "../types/Recipe.ts";

interface RouteParams {
    id: string;
}

const RecipeDetail: React.FC = () => {
    const { apiUrl } = defaultServerConfig;
    const params = useParams();
    console.debug(params);
    const id = params['recipeId'];
    console.debug(id);
    const [recipe, setRecipes] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace the URL with the endpoint you want to fetch data from
        axios.get(`${apiUrl}/api/recipes/${id}`)
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
            <Header />
            <main className="recipe-detail">
                <div className="recipe-header">
                    <h1>{recipe?.title}</h1>
                    <div className="rating">
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
                <p>{recipe?.shortDescription}</p>
                {/*<img src={recipe?.imageId} alt="Recipe" className="recipe-image" />*/}
                <div className="recipe-info">
                    <div className="info-block">
                        <span>Prep time</span>
                        <span>{recipe?.prepTime}</span>
                    </div>
                    <div className="info-block">
                        <span>Cook time</span>
                        <span>{recipe?.cookTime}</span>
                    </div>
                    <div className="info-block">
                        <span>Total time</span>
                        <span>{recipe?.cookTime} + {recipe?.prepTime}</span>
                    </div>
                    <div className="info-block">
                        <span>Servings</span>
                        <span>{recipe.servings}</span>
                    </div>
                </div>
                <h3>Ingredients:</h3>
                <strong>TODO</strong>
                {/*<ul>*/}
                {/*    {recipe?.ingredientsList.map((ingredient, index) => (*/}
                {/*        <li key={index}>{ingredient}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
                <h3>Directions:</h3>
                <strong>TODO</strong>
                {/*<ol>*/}
                {/*    {recipe.directions.map((direction, index) => (*/}
                {/*        <li key={index}>{direction}</li>*/}
                {/*    ))}*/}
                {/*</ol>*/}
                <h3>Reviews:</h3>
                <strong>TODO</strong>
                {/*{recipe.reviews.map((review, index) => (*/}
                {/*    <div className="review" key={index}>*/}
                {/*        <p>{review.user}</p>*/}
                {/*        <p>{review.rating}</p>*/}
                {/*        <p>{review.comment}</p>*/}
                {/*    </div>*/}
                {/*))}*/}
                <div className="write-review">
                    <h3>Write your own review:</h3>
                    <strong>TODO</strong>
                    {/*<form>*/}
                    {/*    <label>*/}
                    {/*        <span>0/5 star rating</span>*/}
                    {/*        <input type="number" min="0" max="5" />*/}
                    {/*    </label>*/}
                    {/*    <label>*/}
                    {/*        <textarea placeholder="Leave your feedback"></textarea>*/}
                    {/*    </label>*/}
                    {/*    <button type="submit">Register</button>*/}
                    {/*</form>*/}
                </div>
            </main>
        </div>
    );
};

export default RecipeDetail;
