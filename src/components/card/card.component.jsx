import React from "react";
import posed from "react-pose";
import "./card.styles.scss";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const H2 = posed.h2({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

export const Card = props => {
  const { name, imageUrl } = props.pokemon;
  return (
    <Container className="card-container">
      <H2>{name}</H2>
      <img alt="pokemon" src={imageUrl} />
    </Container>
  );
};
