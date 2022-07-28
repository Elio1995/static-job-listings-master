import React from "react";
import DesktopHeader from "../../images/bg-header-desktop.svg";
import MobileHeader from "../../images/bg-header-mobile.svg";
import "../App.css";

function Top() {
  return (
    <>
      <div
        className="mobileTop"
        style={{ backgroundColor: "hsl(180, 29%, 50%)" }}
      >
        <img alt="header" src={MobileHeader} width="100%"></img>
      </div>
      <div
        className="desktopTop"
        style={{ backgroundColor: "hsl(180, 29%, 50%)" }}
      >
        <img alt="header" src={DesktopHeader} width="100%"></img>
      </div>
    </>
  );
}

export default Top;
