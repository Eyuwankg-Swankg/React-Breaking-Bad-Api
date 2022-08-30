import React from "react";
import BBlogo from "../Images/BB-logo.png"
import BCSlogo from "../Images/BCS-logo.png"

let Header = () => {
  return (
    <header className="center">
      <img src={BBlogo} alt="" />
      <span>X</span>
      <img src={BCSlogo} alt="" />
    </header>
  );
};
export default React.memo(Header);