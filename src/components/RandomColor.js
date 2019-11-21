import React, { useState } from 'react';
import './RandomColor.css'

function RandomColor() {
    const [backgroundColor, setBackgroundColor] = useState('#fff');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setBackgroundColor(color);
        return color;
    }
    return(
        <div className="container" style={{ backgroundColor: backgroundColor }}>
            <button className="elButton" onClick={getRandomColor} >Let the magic works</button>
        </div>
    )
}

export default RandomColor;