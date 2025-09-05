import React from "react";
import { useState } from 'react';
import "./Menu.css";
export default function Menudiv(info) {
  const [count, setCount] = useState("MIN");
  const Vote = () => {
    if (count === 'MAX') {
      alert('Cannot Vote more');
      return;
    }
    if (count >= 9){
      setCount('MAX');
      return;
    }
    else{
      if (count === 'MIN') {
        setCount(1); // If count was 'MIN', reset to 1
      }
      else
      setCount(count + 1); // Updates the 'count' state
    }
  };
  
  const Unvote = () => {
    if (count === 'MIN') {
      alert('Cannot Unvote');
      return;
    }
    
    else
    if (count === 'MAX') {
      setCount(9); // If count was 'MAX', reset to 9
    } else{
      if (count == 1){
        setCount('MIN');
        return;
      }
      setCount(count  -1); // Updates the 'count' state
    }
  };

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
        <button onClick={Vote}>Click to Vote</button>
        <h2>{count}</h2>
        <button onClick={Unvote}>Click to Unvote</button>
      </div>
    </div>
  );
}
