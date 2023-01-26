import React from "react";

const ImageCard = ({ cards, onCardClick }) => {
    console.log(cards, "from image card comp");
    const createRandomArr = () => {

    }
console.log(Math.floor(Math.random()*10))
    return cards.map((card) => {
        return (
            <div key={card.id} onClick={() => onCardClick(card.id)}>
                <img src={card.src} alt={`hieroglyph ${card.name}`} />
            </div>
        );
    });
};

export default ImageCard;
