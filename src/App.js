import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from "react-router-dom";
import CardList from "./components/card-list/card-list.component";
import SetList from "./components/set-list/set-list.component";
import CardInfo from './components/card-info/card-info.component'
import { Pagination } from "./components/common/pagination.component";

import { fetchCards } from './redux/actions';

class App extends Component {

  handlePageChange = page => {
    console.log(page);
    this.props.fetchCards(`https://api.pokemontcg.io/v1/cards?page=${page}`);
  };

  render() {
    const { cards, currentPage, pageSize, itemsCount, setsCount } = this.props;
    return (
      <main className="container">
        <Switch>
          <Route path="/pokemon/:id" component={CardInfo} />
          <Route path="/pokemon" render={() => <CardList pokemon={this.props.tarjetas} />} />
          <Route path="/sets" render={() => <SetList sets={this.props.sets} />} />
          <Redirect to="/pokemon" />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
