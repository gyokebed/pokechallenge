import React from "react";
import { Card } from '../card/card.component';
import './card-list.styles.scss'

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.pokemon.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};