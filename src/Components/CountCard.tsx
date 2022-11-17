import React, { useState } from "react";
import '../styles/CountCard.css';

function CountCard() {
    const [counter, setCounter] = useState<number>(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };
    return (
        <>
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
