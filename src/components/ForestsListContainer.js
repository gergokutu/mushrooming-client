import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForestsList from './ForestsList'
import { getForests } from '../actions/forests'

class ForestsListContainer extends Component {

  componentDidMount() {
    this.props.getForests()
  }

  render() {
    console.log('ForestsListContainer this.props:', this.props.forests)
    return (
      <ForestsList forestslist={this.props.forests}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    ads: state.forestsList
  }
}

const mapDispatchToProps = {
  getForests
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestsListContainer)