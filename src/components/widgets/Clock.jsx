import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    let interval;
    if (isMounted) {
      interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <div className="widget">
      <h2>Clock</h2>
      {isMounted && <p>{time.toLocaleTimeString()}</p>}
      <button onClick={() => setIsMounted(!isMounted)}>
        {isMounted ? "Unmount" : "Mount"}
      </button>
    </div>
  );
}

export default Clock;
