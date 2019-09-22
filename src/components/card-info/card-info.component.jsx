import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCard } from '../../redux/actions';

class CardInfo extends Component {

  componentDidMount() {
    console.log(this.props, 'Props from card info component');
    this.props.fetchCard(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.id}`);
  }

  render() {
    const { card } = this.props;
    return (
      <div>
        <h1>CARD INFO COMPONENT {card.name}</h1>
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