import React from "react";
import { Link } from 'react-router-dom';

export const Card = props => {
  const { name, imageUrl, id } = props.pokemon;
  return (
    <Link to={id}>
      <div className="card-container">
        <h3>{name}</h3>
        <img alt="pokemon" src={imageUrl} />
      </div>
    </Link>
  );
};