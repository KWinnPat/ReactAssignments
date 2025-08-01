import React, { useState } from "react";

function RGBSlider() {
  const [red, setRed] = useState(128);
  const [green, setGreen] = useState(128);
  const [blue, setBlue] = useState(128);

  const bgColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="widget">
      <h2>RGB Slider</h2>
      <div className="color-box" style={{ backgroundColor: bgColor }}></div>
      <div className="rgb-values">
        <p>Red: {red}</p>
        <p>Green: {green}</p>
        <p>Blue: {blue}</p>
      </div>
      <div className="slider-group">
        <div>
          <label>Red</label>
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Green</label>
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Blue</label>
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default RGBSlider;
