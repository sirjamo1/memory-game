import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import hieroglyphA from "./components/assets/images/hieroglyphA.png";
import hieroglyphD from "./components/assets/images/hieroglyphD.png";
import hieroglyphE from "./components/assets/images/hieroglyphE.png";
import hieroglyphG from "./components/assets/images/hieroglyphG.png";
import hieroglyphI from "./components/assets/images/hieroglyphI.png";
import hieroglyphJ from "./components/assets/images/hieroglyphJ.png";
import hieroglyphM from "./components/assets/images/hieroglyphM.png";
import hieroglyphO from "./components/assets/images/hieroglyphO.png";
import hieroglyphT from "./components/assets/images/hieroglyphT.png";

function App() {
    const [score, setScore] = useState({ count: 0 });
    const [highScore, setHighScore] = useState({ count: 0 });
    const [cards, setCards] = useState([
        {
            name: "A",
            src: hieroglyphA,
            id: 0,
            clicked: false,
        },
        {
            name: "D",
            src: hieroglyphD,
            id: 1,
            clicked: false,
        },
        {
            name: "E",
            src: hieroglyphE,
            id: 2,
            clicked: false,
        },
        {
            name: "G",
            src: hieroglyphG,
            id: 3,
            clicked: false,
        },
        {
            name: "I",
            src: hieroglyphI,
            id: 4,
            clicked: false,
        },
        {
            name: "J",
            src: hieroglyphJ,
            id: 5,
            clicked: false,
        },
        {
            name: "M",
            src: hieroglyphM,
            id: 6,
            clicked: false,
        },
        {
            name: "O",
            src: hieroglyphO,
            id: 7,
            clicked: false,
        },
        {
            name: "T",
            src: hieroglyphT,
            id: 8,
            clicked: false,
        },
    ]);

    const restartGame = (cardsCopy) => {
        cardsCopy.forEach((card) => {
            card.clicked = false;
        });
        setCards(cardsCopy);
        setScore({ count: 0 });
    };
    const onCardClick = (id) => {
        let cardsCopy = [...cards];
        cardsCopy.forEach((card) => {
            if (card.id === id) {
                if (card.clicked === true) {
                    return restartGame(cardsCopy);
                }
                card.clicked = true;
                setScore((prev) => {
                    return {
                        ...prev,
                        count: prev.count + 1,
                    };
                });
            }
        });
        setCards(cardsCopy);
    };
    useEffect(() => {
        if (score.count > highScore.count)
            setHighScore((prev) => {
                return { ...prev, count: score.count };
            });
    },[score.count, highScore.count]);
    return (
        <div className="App">
            <h1>Memory Game</h1>
            <h4>Don't Tap The Same {<br />} Hieroglyph Twice.</h4>
            <div>Score : {score.count}</div>
            <div>Hight Score : {highScore.count}</div>
            <div className="card-container">
                <ImageCard cards={cards} onCardClick={onCardClick} />
            </div>
        </div>
    );
}

export default App;
