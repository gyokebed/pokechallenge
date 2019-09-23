import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Set } from '../set/set.component';
import './set-list.styles.scss';
import { Pagination } from '../common/pagination.component';

import { fetchSets } from '../../redux/actions';

class SetList extends Component {

  componentDidMount() {
    this.props.fetchSets("https://api.pokemontcg.io/v1/sets", 1);
  }

  handlePageChange = page => {
    console.log(page);
    this.props.fetchSets(`https://api.pokemontcg.io/v1/sets?page=${page}`, page);
  };

  render() {
    const { cards, currentPage, pageSize, itemsCount, setsCount } = this.props;
    console.log(this.props, 'Props from set list component');
    return (
      <div>
        <div className="set-list">
          {this.props.sets.map(set => (
            <Link to={`/sets/${set.code}`} key={set.code}>
              <Set set={set} />
            </Link>
          ))}
        </div>
        <Pagination
          itemsCount={itemsCount}
          setsCount={setsCount}
          currentPage={currentPage}
          pageSize={107} // Response headers only returns pagesize of 100 but API fetch 107
          onPageChange={this.handlePageChange}
      />
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