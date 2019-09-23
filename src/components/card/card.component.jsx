import React from "react";

export const Card = props => {
  const { name, imageUrl, id } = props.pokemon;
  return (
      <div className="card-container">
        <h3>{name}</h3>
        <img alt="pokemon" src={imageUrl} />
      </div>
  );
};