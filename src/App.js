import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import logo from "./logo.svg";

class App extends Component {
  state = {};

  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    fetch("https://api.pokemontcg.io/v1/cards")
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon: pokemon.cards }));
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
