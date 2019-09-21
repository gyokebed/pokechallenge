import React from "react";
import { Set } from "../set/set.component";
//import './card-list.styles.scss'

export const SetList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.sets.map(set => (
        <Set key={set.code} set={set} />
      ))}
    </div>
  );
};
