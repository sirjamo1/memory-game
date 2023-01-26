import React from "react";

const ImageCard = ({ cards, onCardClick }) => {
    console.log(cards, "from imagecard comp");

    return cards.map((card) => {
        return (
            <div key={card.id} onClick={() => onCardClick(card.id)}>
                <img src={card.src} alt={`hieroglyph ${card.name}`} />
            </div>
        );
    });
};

export default ImageCard;
