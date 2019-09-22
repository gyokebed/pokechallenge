import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from '../card/card.component';
import { Pagination } from '../common/pagination.component';
import './card-list.styles.scss';

import { fetchCards } from '../../redux/actions';

class CardList extends Component {

  componentDidMount() {
    console.log(this.props, 'Props from card list component');
    this.props.fetchCards("https://api.pokemontcg.io/v1/cards");
  }

  handlePageChange = page => {
    console.log(page);
    this.props.fetchCards(`https://api.pokemontcg.io/v1/cards?page=${page}`);
  };

  render() {
    const { cards, currentPage, pageSize, itemsCount, setsCount } = this.props;
    return (
      <div>
        <div className="card-list">
          {this.props.pokemon.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <Pagination
          itemsCount={itemsCount}
          setsCount={setsCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tarjetas: state.cards,
    itemsCount: state.totalCards,
    setsCount: state.totalSets,
    currentPage: state.currentPage,
    pageSize: state.pageSize,
    sets: state.sets
  }
}

const mapDispatchToProps = {
  fetchCards
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));