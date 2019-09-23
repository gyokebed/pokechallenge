import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCard } from '../../redux/actions';

class CardInfo extends Component {

  componentDidMount() {
    console.log(this.props, 'Props from card info component');
    this.props.fetchCard(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.id}`);
  }

  render() {
    const { imageUrl, name, artist, types, attacks, weaknesses } = this.props.card;
    return (
      <div className="pokemon-info">
        <img src={imageUrl} />
        <h1>Name: {name}</h1>
        <p>Types: {types}</p>
        <p>Artist: {artist}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
  }
}

const mapDispatchToProps = {
  fetchCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInfo);