import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("black");
  const [inputValue, setInputValue] = useState("");

  const handleUpdate = () => {
    setColor(inputValue);
    setInputValue("");
  };

  return (
    <div className="widget">
      <h2>Color Changer</h2>
      <h1 style={{ color }}>{color}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter color name"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default ColorChanger;
