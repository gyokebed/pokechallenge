import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Set } from '../set/set.component';
import { Pagination } from '../common/pagination.component';

import { fetchSets } from '../../redux/actions';

class SetList extends Component {

  componentDidMount() {
    this.props.fetchSets("https://api.pokemontcg.io/v1/sets");
  }

  handlePageChange = page => {
    console.log(page);
    this.props.fetchSets(`https://api.pokemontcg.io/v1/sets?page=${page}`);
  };

  render() {
    const { cards, currentPage, pageSize, itemsCount, setsCount } = this.props;
    console.log(this.props, 'Props from set list component');
    return (
      <div>
        <div className="card-list">
          {this.props.sets.map(set => (
            <Set key={set.code} set={set} />
          ))}
        </div>
        {/* <Pagination
          itemsCount={itemsCount}
          setsCount={setsCount}
          currentPage={currentPage}
          pageSize={107} // Response headers returns pagesize of 100 but API fetch 107
          onPageChange={this.handlePageChange}
      /> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
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
  fetchSets
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetList));