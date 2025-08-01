import React, { useState } from "react";

function TextAlignment() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="widget">
      <h2>Text Alignment</h2>
      <p style={{ textAlign: alignment }}>Align me!</p>
      <div className="button-group">
        <button onClick={() => setAlignment("left")}>Left</button>
        <button onClick={() => setAlignment("center")}>Center</button>
        <button onClick={() => setAlignment("right")}>Right</button>
      </div>
    </div>
  );
}

export default TextAlignment;
