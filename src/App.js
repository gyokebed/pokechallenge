import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { CardList } from "./components/card-list/card-list.component";
import { SetList } from "./components/set-list/set-list.component";
import { Pagination } from "./components/common/pagination.component";

import logo from "./logo.svg";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      sets: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    const getCards = async () => {
      const response = await axios.get("https://api.pokemontcg.io/v1/sets");
      console.log(response.headers);
      this.setState({
        cards: response.data.cards,
        sets: response.data.sets,
        pageSize: response.headers["page-size"],
        totalCards: response.headers["total-count"]
      });
    };

    getCards();
  }

  handlePageChange = page => {
    console.log(page);

    const getCards = async () => {
      const response = await axios.get(
        `https://api.pokemontcg.io/v1/cards?page=${page}`
      );
      console.log(response.headers);
      this.setState({
        cards: response.data.cards,
        pageSize: response.headers["page-size"],
        currentPage: page
      });
    };

    getCards();
  };

  render() {
    console.log(this.state);
    const { cards, sets, currentPage, pageSize, totalCards } = this.state;
    return (
      <main className="container">
        <Switch>
          <Route path="/pokemon" render={() => <CardList pokemon={cards} />} />
          <Route path="/sets" render={() => <SetList sets={sets} />} />
          <Redirect to="/pokemon" />
        </Switch>
        <Pagination
          itemsCount={totalCards}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </main>
    );
  }
}

export default App;
