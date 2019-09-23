import React from "react";
import { Link } from 'react-router-dom';

export const Set = props => {
  const { name, logoUrl, code } = props.set;
  return (
    <Link to={code}>
      <div className="card-container">
        <h3>{name}</h3>
        <img alt="logo" src={logoUrl} />
      </div>
    </Link>
  );
};