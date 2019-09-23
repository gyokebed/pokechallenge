import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCode } from '../../redux/actions';
import { Card } from '../card/card.component';
import { Pagination } from '../common/pagination.component';

class CardInfo extends Component {

  componentDidMount() {
    console.log(this.props, 'Props from code list component');
    this.props.fetchCode(`https://api.pokemontcg.io/v1/cards?setCode=${this.props.match.params.code}`);
  }

  render() {
    const { cards, currentPage, pageSize, itemsCount, setsCount } = this.props;
    return (
      <div>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          <div className="card-list">
            {this.props.pokemon.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </Link>
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

const mapStateToProps = (state) => {
  return {
    card: state.card,
  }
}

const mapDispatchToProps = {
  fetchCode
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardInfo));