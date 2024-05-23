import React from 'react';
import '../styles/RecipeCard.css';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
    id: string;
    title: string;
    duration: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, duration }) => {
    return (
        <div className="recipe-card">
            <Link to={`/recipe/${id}`}>
                <h2>{title}</h2>
                <p>Duration: {duration}</p>
            </Link>
        </div>
    );
};

export default RecipeCard;
