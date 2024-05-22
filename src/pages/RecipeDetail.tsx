import React from 'react';
import Header from '../components/Header';
import '../styles/RecipeDetail.css';

const RecipeDetail: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Recipe 1</h2>
                <p>Prep time: 1 min.</p>
                <p>Cook time: 10 min.</p>
                <p>Total time: 11 min.</p>
                <p>Servings: 1</p>
                <h3>Ingredients:</h3>
                <ul>
                    <li>1 cup dried spaghetti</li>
                    <li>1 tablespoon pesto</li>
                    <li>1 handful basil</li>
                </ul>
                <h3>Directions:</h3>
                <ol>
                    <li>Add the dried spaghetti to a large pan of salted boiling water and cook for 10 minutes.</li>
                    <li>Drain the spaghetti with a colander.</li>
                    <li>Add the pesto and the basil to the pasta and mix it well with a spoon. Enjoy!</li>
                </ol>
                <h3>Reviews:</h3>
                <p>Greta: 5/5 star rating - This was an absolute treat!!!</p>
            </main>
        </div>
    );
};

export default RecipeDetail;
