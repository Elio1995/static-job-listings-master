import React from "react";
import Header from "../../images/bg-header-desktop.svg";
import "../App.css";

function Top() {
  return (
    <div style={{ backgroundColor: "hsl(180, 29%, 50%)" }}>
      <img alt="header" src={Header} width="100%"></img>
    </div>
  );
}

export default Top;
