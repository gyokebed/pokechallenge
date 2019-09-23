import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import CardList from "./components/card-list/card-list.component";
import SetList from "./components/set-list/set-list.component";
import CardInfo from './components/card-info/card-info.component'
import CodeList from './components/code-list/code-list.component'
import { fetchCards } from './redux/actions';

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: .5 }
});

class App extends Component {

  handlePageChange = page => {
    console.log(page);
    this.props.fetchCards(`https://api.pokemontcg.io/v1/cards?page=${page}`);
  };

  render() {
    const { cards, currentPage, pageSize, itemsCount, setsCount } = this.props;
    return (
      <main className="container">
        <Route render={({ location }) => (
          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              <Switch location={location}>
                <Route path="/pokemon/:id" component={CardInfo} />
                <Route path="/pokemon" render={() => <CardList pokemon={this.props.tarjetas} />} />
                <Route path="/sets/:code" render={() => <CodeList pokemon={this.props.tarjetas} />} />
                <Route path="/sets" render={() => <SetList sets={this.props.sets} />} />
                <Redirect to="/pokemon" />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        )}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
