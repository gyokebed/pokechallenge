import React from 'react';

export const Card = props => {
    const { name, imageUrl } = props.pokemon;
    return (
        <div className="card-container">
          <h1>{name}</h1>
          <img alt="pokemon" src={imageUrl} />
        </div>
    )
}