import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card } from '../card/card.component';
import './card-list.styles.scss'

import { fetchCards } from '../../redux/actions';

class CardList extends Component {

  componentDidMount() {
    this.props.fetchCards("https://api.pokemontcg.io/v1/cards");
  }

  render() {
    console.log(this.props, 'Props from card list component');
    return (
      <div className="card-list">
        {this.props.pokemon.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
 
const mapDispatchToProps = {
  fetchCards
}

export default connect(null, mapDispatchToProps)(CardList);