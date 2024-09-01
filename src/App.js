import './App.css';
import React from 'react';

function App() {
    const [angle, setAngle] = useState(0);

    const handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        if (isNaN(value)) value = 0;
        if (value < 0) value = 0;
        if (value > 360) value = 360;
        setAngle(value);
    };

    const handleSliderChange = (e) => {
        setAngle(e.target.value);
    };

    const handleRadioChange = (value) => {
        setAngle(value);
    };

    return (
        <div>
            <h1>Angle Selector</h1>
            <input
                type="number"
                value={angle}
                min="0"
                max="360"
                onChange={handleInputChange}
            />
            <input
                type="range"
                value={angle}
                min="0"
                max="360"
                className="slider"
                onChange={handleSliderChange}
            />
            <div id="radioButtons">
                {[0, 45, 60, 90, 180].map((val) => (
                    <label key={val}>
                        <input
                            type="radio"
                            name="angle"
                            value={val}
                            checked={angle == val}
                            onChange={() => handleRadioChange(val)}
                        />
                        {val}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default App;


