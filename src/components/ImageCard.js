import React from "react";

const ImageCard = ({ memoryState, clickedToTrue }) => {
    console.log(memoryState, "from imagecard comp");

    return memoryState.cards.map((card) => {
        return (
            <div key={card.id} onClick={() => clickedToTrue(card.id)}>
                <img src={card.src} />
            </div>
        );
    });
};

export default ImageCard;
