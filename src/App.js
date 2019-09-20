import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import logo from "./logo.svg";
import axios from "axios";

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    const getCards = async () => {
      const response = await axios.get("https://api.pokemontcg.io/v1/cards");
      console.log(response.data);
      this.setState({ pokemon: response.data.cards });
    };

    getCards();
  }

  render() {
    // console.log(this.state);
    const { pokemon } = this.state;
    return (
      <div className="App">
        <CardList pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
