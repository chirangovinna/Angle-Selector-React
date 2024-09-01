import React, { useState } from 'react';
import './App.css';

function App() {
  const [angle, setAngle] = useState(0);

  // Convert slider value to angle value (adjust 1D circular behavior)
  const sliderToAngle = (value) => {
    if (value <= 180) return 180 - value; // Right side (0 to 180)
    return 360 - (value - 180); // Left side (181 to 360)
  };

  // Convert angle value to slider position
  const angleToSlider = (value) => {
    if (value <= 180) return 180 - value; // Right side
    return 360 - value + 180; // Left side
  };

  const handleInputChange = (e) => {
    let value = Math.min(360, Math.max(0, e.target.value));
    setAngle(Number(value));
  };

  const handleSliderChange = (e) => {
    let value = sliderToAngle(Number(e.target.value));
    setAngle(value);
  };

  const handleRadioChange = (e) => {
    setAngle(Number(e.target.value));
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
        value={angleToSlider(angle)}
        onChange={handleSliderChange}
        style={{ width: '100%', transform: 'rotate(180deg)' }} // Flip slider for 1D circle effect
      />
      <div>
        <label>
          <input
            type="radio"
            name="angle"
            value="0"
            checked={angle == 0}
            onChange={handleRadioChange}
          />{' '}
          0°
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="45"
            checked={angle == 45}
            onChange={handleRadioChange}
          />{' '}
          45°
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="60"
            checked={angle == 60}
            onChange={handleRadioChange}
          />{' '}
          60°
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="90"
            checked={angle == 90}
            onChange={handleRadioChange}
          />{' '}
          90°
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="180"
            checked={angle == 180}
            onChange={handleRadioChange}
          />{' '}
          180°
        </label>
      </div>
    </div>
  );
}

export default App;
