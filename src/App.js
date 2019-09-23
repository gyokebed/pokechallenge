import React, { Component } from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';
import NavBar from './components/common/nav-bar.component';
import CardList from "./components/card-list/card-list.component";
import SetList from "./components/set-list/set-list.component";
import CardInfo from './components/card-info/card-info.component'
import CodeList from './components/code-list/code-list.component'

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: .5 }
});

class App extends Component {

  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <main className="container">
        <Route render={({ location }) => (
          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              <Switch location={location}>
                <Route path="/pokemon/:id" component={CardInfo} />
                <Route path="/pokemon" component={CardList} />
                <Route path="/sets/:code" component={CodeList} />
                <Route path="/sets" component={SetList} />
                <Redirect to="/pokemon" />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        )}/>
      </main>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
