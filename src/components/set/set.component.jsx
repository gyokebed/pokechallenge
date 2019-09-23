import React from "react";

export const Set = props => {
  const { name, logoUrl, code } = props.set;
  return (
      <div className="card-container">
        <h3>{name}</h3>
        <img alt="logo" src={logoUrl} />
      </div>
  );
};