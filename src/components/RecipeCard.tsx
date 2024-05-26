import React from 'react';
import '../styles/RecipeCard.css';
import { Link } from 'react-router-dom';
import placeholder from "../assets/placeholder.jpeg";
import defaultServerConfig from "../common/server-info.ts";

interface RecipeCardProps {
    id: string;
    title: string;
    duration: string;
    imageUrl: string; // Add this prop for the image URL
    rating: number; // Add this prop for the rating
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, duration, imageUrl, rating }) => {
    const { apiUrl } = defaultServerConfig;

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className="recipe-card">
            <Link to={`/recipe/${id}`}>
                <img src={imageUrl ? `${apiUrl}/api/images/${imageUrl}` : placeholder} alt={title} className="recipe-image" />
                <div className="recipe-details">
                    <h3>{title}</h3>
                    <p>Duration: {duration}</p>
                    <div className="rating">
                        {renderStars()}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCard;
