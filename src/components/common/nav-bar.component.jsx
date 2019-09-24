import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { fetchCards, fetchSets } from "../../redux/actions";
import "./common.styles.scss";

const NavBar = props => {
  console.log(props.location.pathname);
  const pathname = props.location.pathname;
  return (
    <div className="navbar">
      <div
        className={pathname === "/pokemon" ? "nav-button active" : "nav-button"}
      >
        <Link
          to="/pokemon"
          onClick={() =>
            props.fetchCards("https://api.pokemontcg.io/v1/cards", 1)
          }
        >
          Pokemon Cards
        </Link>
      </div>
      <div
        className={pathname === "/sets" ? "nav-button active" : "nav-button"}
      >
        <Link
          to="/sets"
          onClick={() =>
            props.fetchSets("https://api.pokemontcg.io/v1/sets", 1)
          }
        >
          Sets
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchCards,
  fetchSets
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(NavBar)
);
