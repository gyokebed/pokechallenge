import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCards, fetchSets } from "../../redux/actions";
import "./common.styles.scss";

const NavBar = props => {
  return (
    <div className="navbar">
      <Link
        to="/pokemon"
        onClick={() =>
          props.fetchCards("https://api.pokemontcg.io/v1/cards", 1)
        }
      >
        Pokemon Cards
      </Link>
      <Link
        to="/sets"
        onClick={() => props.fetchSets("https://api.pokemontcg.io/v1/sets", 1)}
      >
        Sets
      </Link>
    </div>
  );
};

const mapDispatchToProps = {
  fetchCards,
  fetchSets
};

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
