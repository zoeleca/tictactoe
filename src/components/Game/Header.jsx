import React from "react";

const Header = ({playerWon, status}) => {
    return(
  <div>
    <h1 className="winner">{playerWon}</h1>
    <h4 className="playerName">{status}</h4>
  </div>
    )
};

export default Header;
