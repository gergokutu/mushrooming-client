import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForestsList from './ForestsList'
import { getForests } from '../actions/forests'

class ForestsListContainer extends Component {

  componentDidMount() {
    this.props.getForests()
  }

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
  getForests
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestsListContainer)