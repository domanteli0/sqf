import React from "react";
import "../styles/Button.css";

const Button: React.FC = ({text, onClick}) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
