import React, { useState } from "react";
import '../styles/CountCard.css';
import NavBar from "./NavBar";

function CountCard() {
    const [counter, setCounter] = useState<number>(0);
    const incrementCounter = () => {
        setCounter((curr) => curr + 1);
    };

    const decrementCounter = () => {
        setCounter((curr) => curr - 1);
    };
    return (
        <>
            <NavBar />
            <div className="floating-card CountCard">
                <div className="Counter-title">Counter</div>
                <div style={{fontSize:'30pt'}}>{counter}</div>
                <div className="buttons">
                    <button onClick={decrementCounter} className="btn">-</button>
                    <button onClick={incrementCounter} className="btn">+</button>
                </div>
            </div>
        </>
    );
}

export default CountCard;
