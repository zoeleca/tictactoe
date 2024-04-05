// ResetButton.jsx
import React from "react";

const ResetButton = ({ resetGame }) => {
  return (
    <div className="btn">
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default ResetButton;
