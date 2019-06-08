import React from "react";
import "./style.css";

const Images = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );

export default Images;