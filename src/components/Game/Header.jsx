import React from "react";

const Header = ({playerWon, status}) => {
    return(
  <div>
    <h1>{playerWon || status}</h1>
  </div>
    )
};

export default Header;
