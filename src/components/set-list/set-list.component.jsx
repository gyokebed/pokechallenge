import React, { Component } from "react";
import { connect } from 'react-redux';
import { Set } from '../set/set.component';

import { fetchSets } from '../../redux/actions';

class SetList extends Component {

  componentDidMount() {
    this.props.fetchSets("https://api.pokemontcg.io/v1/sets");
  }

  render() {
    console.log(this.props, 'Props from set list component');
    return (
      <div className="card-list">
        {this.props.sets.map(set => (
          <Set key={set.code} set={set} />
        ))}
      </div>
    );
  }
}
 
const mapDispatchToProps = {
  fetchSets
}

export default connect(null, mapDispatchToProps)(SetList);