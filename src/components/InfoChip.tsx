import React from "react";
import '../styles/InfoChip.css';

const InfoChip: React.FC = ({title, value}) => {
    return (
    <div className="info-chip">
        <span className="info-chip-title">{title}</span>
        <span className="info-chip-value">{value}</span>
    </div>)
};

export default InfoChip;