import React from "react";
import "./Menu.css";
export default function Menudiv(info) {
  return (
    <div className="Menudiv">
      <div className="top">
        <div className="text">
          <h2>{info.category}</h2>
          <h3>{info.name}</h3>
          <p>{info.desc}</p>
        </div>
        <div className="image">
          <img src={info.url} alt={info.name} />
        </div>
      </div>
      <div className="bottom">
        <button>Click to Vote</button>
        <h2>MIN</h2>
        <button>Click to Unvote</button>
      </div>
    </div>
  );
}
