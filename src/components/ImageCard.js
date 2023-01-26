import React from "react";

const ImageCard = ({ cards, onCardClick }) => {
        let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        let randomCardArr = []
        let randomIndexArr = [];
        let i = numArr.length;
        let j = 0;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            randomIndexArr.push(numArr[j]);
            numArr.splice(j, 1);
        }
        randomIndexArr.forEach((index) => {
         randomCardArr.push(cards[index])
        })   

    return randomCardArr.map((card) => {
        return (
    <div key={card.id} onClick={() => onCardClick(card.id)}>
        <img src={card.src} alt={`hieroglyph ${card.name}`} />
    </div>
        );
    });
};

export default ImageCard;
