import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import logo from "./logo.svg";
import axios from "axios";

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    const getCards = async () => {
      const response = await axios.get("https://api.pokemontcg.io/v1/cards");
      console.log(response);
      this.setState({ cards: response.data.cards });
    };

    getCards();
  }

  render() {
    // console.log(this.state);
    const { cards } = this.state;
    return (
      <div className="App">
        <CardList pokemon={cards} />
      </div>
    );
  }
}

export default App;
