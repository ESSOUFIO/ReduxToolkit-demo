import "./Counter.css";

import React from "react";

const Counter = () => {
  return (
    <div className="Counter">
      <h2>Count: </h2>
      <div className="buttons">
        <button>Increase</button>
        <button>Decrease</button>
      </div>
      <button>Show/Hide Counter</button>
    </div>
  );
};

export default Counter;
