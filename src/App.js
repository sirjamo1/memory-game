import React, { useState } from "react";
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
    const [memoryState, setMemoryState] = useState({
        cards: [
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
        ],
    });
    const restartGame = (memoryStateCopy) => {
        memoryStateCopy.cards.map((card) => {
            card.clicked = false;
        });
        setMemoryState(memoryStateCopy);
    };
    const clickedToTrue = (id) => {
        let memoryStateCopy = { ...memoryState };
        memoryStateCopy.cards.map((card) => {
            if (card.id === id) {
                if (card.clicked === true) {
                    return restartGame(memoryStateCopy);
                }
                card.clicked = true;
            }
        });
        setMemoryState(memoryStateCopy);
    };
    return (
        <div className="App">
            <h1>Memory game</h1>
            <div className="card-container">
                <ImageCard
                    memoryState={memoryState}
                    clickedToTrue={clickedToTrue}
                />
            </div>
        </div>
    );
}

export default App;
