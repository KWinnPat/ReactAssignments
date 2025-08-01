import React, { useState } from "react";

function FontSizer() {
  const [fontSize, setFontSize] = useState(16);

  const grow = () => {
    setFontSize((prev) => Math.min(prev + 5, 100));
  };

  const shrink = () => {
    setFontSize((prev) => Math.max(prev - 5, 0));
  };

  return (
    <div className="widget">
      <h2>Font Sizer</h2>
      <p style={{ fontSize: `${fontSize}px` }}>Resize me!</p>
      <div className="button-group">
        <button onClick={grow}>Grow</button>
        <button onClick={shrink}>Shrink</button>
      </div>
    </div>
  );
}

export default FontSizer;
