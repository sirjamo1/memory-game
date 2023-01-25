import React, { useState } from "react";

import "./App.css";
import ImageCard from "./components/ImageCard";

function App() {
    const [memory, setMemory] = useState({
        cards: [
            {
                name: "",
                id: 0,
                clicked: false,
            },
            {
                name: "",
                id: 1,
                clicked: false,
            },
            {
                name: "",
                id: 2,
                clicked: false,
            },
        ],
    });
    return (
        <div className="App">
            <h1>Memory game</h1>
            <ImageCard cards={memory.cards}/>
        </div>
    );
}

export default App;
