import React, { Component } from "react";
import { connect } from "react-redux";
import posed from "react-pose";
import { fetchCard } from "../../redux/actions";
import "./card-info.styles.scss";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const H2 = posed.h2({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

class CardInfo extends Component {
  componentDidMount() {
    this.props.fetchCard(
      `https://api.pokemontcg.io/v1/cards/${this.props.match.params.id}`
    );
  }

  render() {
    const { imageUrl, name, artist, types, id, subtype, set } = this.props.card;
    return (
      <Container className="pokemon-info">
        <img alt="Pokemon" src={imageUrl} />
        <H2>Name: {name}</H2>
        <H2>Artist: {artist}</H2>
        <H2>Set: {set}</H2>
        <H2>Types: {types}</H2>
        <H2>Subtype: {subtype}</H2>
        <H2>Id: {id}</H2>
      </Container>
    );
  }
}

const mapStateToProps = ({ card }) => {
  return {
    card
  };
};

const mapDispatchToProps = {
  fetchCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardInfo);
