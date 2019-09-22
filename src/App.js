import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from "react-router-dom";
import { CardList } from "./components/card-list/card-list.component";
import { SetList } from "./components/set-list/set-list.component";
import { Pagination } from "./components/common/pagination.component";

import { fetchCards } from './redux/actions';

import logo from "./logo.svg";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchCards("https://api.pokemontcg.io/v1/cards");
  }

  handlePageChange = page => {
    console.log(page);
    this.props.fetchCards(`https://api.pokemontcg.io/v1/cards?page=${page}`);
  };

  render() {
    console.log(this.props, 'Props from render() App');
    const { cards, currentPage, pageSize, itemsCount } = this.props;
    return (
      <main className="container">
        <Switch>
          {/* <Route path="/pokemon" render={() => <CardList pokemon={this.props.cards} />} /> */}
          <CardList pokemon={this.props.tarjetas}></CardList>
          {/* <Route path="/sets" render={() => <SetList sets={sets} />} /> */}
          <Redirect to="/pokemon" />
        </Switch>
        <Pagination
          itemsCount={itemsCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    tarjetas: state.cards,
    itemsCount: state.totalCards,
    currentPage: state.currentPage,
    pageSize: state.pageSize
  }
}

const mapDispatchToProps = {
  fetchCards
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
