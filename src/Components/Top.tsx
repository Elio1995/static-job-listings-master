import React from "react";
import "../App.css";

function Top() {
  return (
    <>
      <div
        className="mobileTop"
        style={{ backgroundColor: "hsl(180, 29%, 50%)" }}
      >
        <img
          alt="header"
          src="../../images/bg-header-mobile.svg"
          width="100%"
        ></img>
      </div>
      <div
        className="desktopTop"
        style={{ backgroundColor: "hsl(180, 29%, 50%)" }}
      >
        <img
          alt="header"
          src="../../images/bg-header-desktop.svg"
          width="100%"
        ></img>
      </div>
    </>
  );
}

export default Top;
