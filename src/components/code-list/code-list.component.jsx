import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCode } from '../../redux/actions';
import { Card } from '../card/card.component';
import { Pagination } from '../common/pagination.component';

class CodeList extends Component {

  componentDidMount() {
    this.props.fetchCode(`https://api.pokemontcg.io/v1/cards?setCode=${this.props.match.params.code}`, 1);
  }

  handlePageChange = page => {
    this.props.fetchCode(`https://api.pokemontcg.io/v1/cards?setCode=${this.props.match.params.code}&page=${page}`, page);
  };

  render() {
    const { cards, currentPage, pageSize, itemsCount } = this.props;
    return (
      <div>
          <div className="card-list">
            {cards.map(pokemon => (
              <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                <Card pokemon={pokemon} />
              </Link>
            ))}
          </div>
        <Pagination
          itemsCount={itemsCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    itemsCount: state.totalCards,
    currentPage: state.currentPage,
    pageSize: state.pageSize,
  }
}

const mapDispatchToProps = {
  fetchCode
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CodeList));