import React, { useState } from 'react';
import './App.css';

function App() {
    const [angle, setAngle] = useState(0);

    const handleInputChange = (e) => {
        let value = Math.min(360, Math.max(0, e.target.value));
        setAngle(value);
    };

    const handleSliderChange = (e) => {
        setAngle(e.target.value);
    };

    const handleRadioChange = (e) => {
        setAngle(e.target.value);
    };

    return (
        <div className="container">
            <h1>Angle Selector</h1>
            <input
                type="number"
                value={angle}
                onChange={handleInputChange}
                style={{ width: '60px' }}
            />
            <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={handleSliderChange}
                style={{ width: '100%' }}
            />
            <div>
                <label>
                    <input
                        type="radio"
                        name="angle"
                        value="0"
                        checked={angle == 0}
                        onChange={handleRadioChange}
                    /> 0°
                </label>
                <label>
                    <input
                        type="radio"
                        name="angle"
                        value="45"
                        checked={angle == 45}
                        onChange={handleRadioChange}
                    /> 45°
                </label>
                <label>
                    <input
                        type="radio"
                        name="angle"
                        value="60"
                        checked={angle == 60}
                        onChange={handleRadioChange}
                    /> 60°
                </label>
                <label>
                    <input
                        type="radio"
                        name="angle"
                        value="90"
                        checked={angle == 90}
                        onChange={handleRadioChange}
                    /> 90°
                </label>
                <label>
                    <input
                        type="radio"
                        name="angle"
                        value="180"
                        checked={angle == 180}
                        onChange={handleRadioChange}
                    /> 180°
                </label>
            </div>
        </div>
    );
}

export default App;
