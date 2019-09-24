import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "../card/card.component";
import { Pagination } from "../common/pagination.component";
import "./card-list.styles.scss";

import { fetchCards } from "../../redux/actions";

class CardList extends Component {
  componentDidMount() {
    this.props.fetchCards("https://api.pokemontcg.io/v1/cards", 1);
  }

  handlePageChange = page => {
    this.props.fetchCards(
      `https://api.pokemontcg.io/v1/cards?page=${page}`,
      page
    );
  };

  render() {
    const { cards, totalCards, currentPage, pageSize } = this.props;
    return (
      <div>
        <div className="card-list">
          {cards.map(card => (
            <Link to={`/pokemon/${card.id}`} key={card.id}>
              <Card pokemon={card} />
            </Link>
          ))}
        </div>
        <Pagination
          itemsCount={totalCards}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ cards, totalCards, currentPage, pageSize }) => {
  return {
    cards,
    totalCards,
    currentPage,
    pageSize
  };
};

const mapDispatchToProps = {
  fetchCards
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardList)
);
