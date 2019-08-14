import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForestsList from './ForestsList'
// import { allForests, getForests } from '../actions/forests'
import {baseUrl} from '../constants'

class ForestsListContainer extends Component {

  render() {
    return <div>
      {console.log('FLCont render this.props:', this.props)}
      <ForestsList forestsList={this.props.forests}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    forests: state.forestsList
  }
}

const mapDispatchToProps = {
  // allForests
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestsListContainer)