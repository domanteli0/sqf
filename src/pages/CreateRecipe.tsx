import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/CreateRecipe.css';

const CreateRecipe: React.FC = () => {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [totalTime, setTotalTime] = useState('');
    const [servings, setServings] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [directions, setDirections] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState('');
    const [direction, setDirection] = useState('');

    const handleAddIngredient = () => {
        if (ingredient) {
            setIngredients([...ingredients, ingredient]);
            setIngredient('');
        }
    };

    const handleAddDirection = () => {
        if (direction) {
            setDirections([...directions, direction]);
            setDirection('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle the submission logic, possibly sending the data to the backend
        console.log({
            recipeName,
            description,
            prepTime,
            cookTime,
            totalTime,
            servings,
            ingredients,
            directions,
        });
    };

    return (
        <div>
            <Header />
            <main className="create-recipe">
                <h2>Type in recipe name...</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            placeholder="Type in recipe name..."
                            className="large-input"
                        />
                    </label>
                    <label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add recipe description..."
                className="large-input"
            ></textarea>
                    </label>
                    <div className="image-upload">
                        <label htmlFor="imageUpload">Include an image</label>
                        <input type="file" id="imageUpload" />
                    </div>
                    <div className="recipe-info">
                        <div className="info-block">
                            <label>
                                Prep time
                                <input
                                    type="text"
                                    value={prepTime}
                                    onChange={(e) => setPrepTime(e.target.value)}
                                    placeholder="time"
                                />
                            </label>
                        </div>
                        <div className="info-block">
                            <label>
                                Cook time
                                <input
                                    type="text"
                                    value={cookTime}
                                    onChange={(e) => setCookTime(e.target.value)}
                                    placeholder="time"
                                />
                            </label>
                        </div>
                        <div className="info-block">
                            <label>
                                Total time
                                <input
                                    type="text"
                                    value={totalTime}
                                    onChange={(e) => setTotalTime(e.target.value)}
                                    placeholder="time"
                                />
                            </label>
                        </div>
                        <div className="info-block">
                            <label>
                                Servings
                                <input
                                    type="text"
                                    value={servings}
                                    onChange={(e) => setServings(e.target.value)}
                                    placeholder="servings"
                                />
                            </label>
                        </div>
                    </div>
                    <h3>Ingredients:</h3>
                    <div className="ingredient-inputs">
                        <label>
                            List ingredient measurement:
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) => setIngredient(e.target.value)}
                                placeholder="Measurement"
                            />
                        </label>
                        <button type="button" onClick={handleAddIngredient}>
                            Add ingredient
                        </button>
                    </div>
                    <ul>
                        {ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                    <h3>Directions:</h3>
                    <div className="direction-inputs">
            <textarea
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                placeholder="Add the directions of the recipe..."
            ></textarea>
                        <button type="button" onClick={handleAddDirection}>
                            Add direction
                        </button>
                    </div>
                    <ol>
                        {directions.map((dir, index) => (
                            <li key={index}>{dir}</li>
                        ))}
                    </ol>
                    <button type="submit" className="publish-button">
                        Publish
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreateRecipe;
