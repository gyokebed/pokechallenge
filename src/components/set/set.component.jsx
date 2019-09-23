import React from "react";
import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const H2 = posed.h2({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

export const Set = props => {
  const { name, logoUrl } = props.set;
  return (
    <Container className='card-container'>
      <H2>{name}</H2>
      <img alt="logo" src={logoUrl} />
    </Container>
  );
};