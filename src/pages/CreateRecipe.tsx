import React, { useState } from 'react';
import Header from '../components/Header';
import InfoChip from '../components/InfoChip';
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
    const [image, setImage] = useState<File | null>(null);

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
            image,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div>
            <Header />
            <main className="create-recipe">
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
                        <label htmlFor="imageUpload" className="image-label">
                            {image ? (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Uploaded"
                                    className="uploaded-image"
                                />
                            ) : (
                                <div className="placeholder-image">
                                    <p>Include an image</p>
                                </div>
                            )}
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            className="image-input"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="recipe-info">
                        <InfoChip
                            title="Prep time"
                            value={`${prepTime}`}
                            postfix="min."
                            editable={true}
                            onChange={(value) => {setPrepTime(value); setTotalTime(value + parseInt(cookTime))}}
                        />
                        <InfoChip
                            title="Cook time"
                            value={`${cookTime}`}
                            postfix="min."
                            editable={true}
                            onChange={(value) => {setPrepTime(value); setTotalTime(value + parseInt(prepTime))}}
                            // onChange={(value) => setCookTime(value)}
                        />
                        <InfoChip
                            title="Total time"
                            value={`${parseInt(prepTime) + parseInt(cookTime)}`}
                            editable={false}
                            postfix="min."
                            onChange={ _ => setTotalTime((parseInt(prepTime) + parseInt(cookTime)).toString())}
                        />
                        <InfoChip
                            title="Servings"
                            value={`${servings}`}
                            editable={true}
                            postfix=""
                            onChange={(value) => setServings(value)}
                        />
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
