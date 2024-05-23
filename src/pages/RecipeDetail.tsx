import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/RecipeDetail.css';

interface RouteParams {
    id: string;
}

const RecipeDetail: React.FC = () => {
    const { id } = useParams<RouteParams>();

    // Mock data for demonstration purposes
    const recipe = {
        id,
        title: 'Recipe 1',
        description: 'Fun and easy pasta recipe, that was made by my grandmother. It is truly amazing what she has achieved with only a few ingredients.',
        imageUrl: 'https://via.placeholder.com/800x400',
        prepTime: '1 min.',
        cookTime: '10 min.',
        totalTime: '11 min.',
        servings: '1',
        ingredients: ['1 cup dried spaghetti', '1 tablespoon pesto', '1 handful basil'],
        directions: [
            'Add the dried spaghetti to a large pan of salted boiling water and cook for 10 minutes.',
            'Drain the spaghetti with a colander.',
            'Add the pesto and the basil to the pasta and mix it well with a spoon. Enjoy!',
        ],
        reviews: [
            {
                user: 'Greta',
                rating: '5/5 star rating',
                comment: "This was an absolute treat!!! Would definitely recommend this to a student that's eating alone.",
            },
        ],
    };

    return (
        <div>
            <Header />
            <main className="recipe-detail">
                <div className="recipe-header">
                    <h1>{recipe.title}</h1>
                    <div className="rating">
                        <span>⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
                <p>{recipe.description}</p>
                <img src={recipe.imageUrl} alt="Recipe" className="recipe-image" />
                <div className="recipe-info">
                    <div className="info-block">
                        <span>Prep time</span>
                        <span>{recipe.prepTime}</span>
                    </div>
                    <div className="info-block">
                        <span>Cook time</span>
                        <span>{recipe.cookTime}</span>
                    </div>
                    <div className="info-block">
                        <span>Total time</span>
                        <span>{recipe.totalTime}</span>
                    </div>
                    <div className="info-block">
                        <span>Servings</span>
                        <span>{recipe.servings}</span>
                    </div>
                </div>
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Directions:</h3>
                <ol>
                    {recipe.directions.map((direction, index) => (
                        <li key={index}>{direction}</li>
                    ))}
                </ol>
                <h3>Reviews:</h3>
                {recipe.reviews.map((review, index) => (
                    <div className="review" key={index}>
                        <p>{review.user}</p>
                        <p>{review.rating}</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
                <div className="write-review">
                    <h3>Write your own review:</h3>
                    <form>
                        <label>
                            <span>0/5 star rating</span>
                            <input type="number" min="0" max="5" />
                        </label>
                        <label>
                            <textarea placeholder="Leave your feedback"></textarea>
                        </label>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RecipeDetail;
