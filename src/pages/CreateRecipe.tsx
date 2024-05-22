import React from 'react';
import Header from '../components/Header';
import '../styles/CreateRecipe.css';

const CreateRecipe: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Create a new recipe</h2>
                <form>
                    <label>
                        Recipe name
                        <input type="text" placeholder="Type in recipe name..." />
                    </label>
                    <label>
                        Description
                        <textarea placeholder="Add recipe description..."></textarea>
                    </label>
                    <label>
                        Prep time
                        <input type="text" placeholder="time" />
                    </label>
                    <label>
                        Cook time
                        <input type="text" placeholder="time" />
                    </label>
                    <label>
                        Total time
                        <input type="text" placeholder="time" />
                    </label>
                    <label>
                        Servings
                        <input type="text" placeholder="servings" />
                    </label>
                    <h3>Ingredients:</h3>
                    <button type="button">Add ingredient</button>
                    <h3>Directions:</h3>
                    <textarea placeholder="Add the directions of the recipe..."></textarea>
                    <button type="submit">Publish</button>
                </form>
            </main>
        </div>
    );
};

export default CreateRecipe;
