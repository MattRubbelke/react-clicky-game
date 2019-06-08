import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} <br/> Your Best Score: {props.best}
    </div>
  </div>
);

export default Header;