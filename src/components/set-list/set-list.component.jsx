import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Set } from "../set/set.component";
import "./set-list.styles.scss";
import Pagination from "../common/pagination.component";

import { fetchSets } from "../../redux/actions";

class SetList extends Component {
  componentDidMount() {
    this.props.fetchSets("https://api.pokemontcg.io/v1/sets", 1);
  }

  handlePageChange = page => {
    this.props.fetchSets(
      `https://api.pokemontcg.io/v1/sets?page=${page}`,
      page
    );
  };

  render() {
    const { sets } = this.props;
    return (
      <div>
        <div className="set-list">
          {sets.map(set => (
            <Link to={`/sets/${set.code}`} key={set.code}>
              <Set set={set} />
            </Link>
          ))}
        </div>
        <Pagination onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

const mapStateToProps = ({ sets }) => {
  return {
    sets
  };
};

const mapDispatchToProps = {
  fetchSets
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SetList)
);
