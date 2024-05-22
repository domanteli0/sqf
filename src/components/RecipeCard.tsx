import React from 'react';
import '../styles/RecipeCard.css';

interface RecipeCardProps {
    title: string;
    duration: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, duration }) => {
    return (
        <div className="recipe-card">
            <h2>{title}</h2>
            <p>Duration: {duration}</p>
        </div>
    );
};

export default RecipeCard;
