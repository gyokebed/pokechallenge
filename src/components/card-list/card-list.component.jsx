import React from "react";

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.pokemon.map(pokemon => (
        <div className="card-container" key={pokemon.id}>
          <h1>{pokemon.name}</h1>
          <img alt="pokemon" src={pokemon.imageUrl} />
        </div>
      ))}
    </div>
  );
};
