import React from "react";
import "./style.css";

function ScoreRow(props) {
  return (
      <div className={props.class + ' ' + 'scoreRow'}>Score: {props.score}</div>
  );
}

export default ScoreRow;
