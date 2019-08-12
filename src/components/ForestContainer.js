import React, { Component } from 'react'
import { connect } from 'react-redux'
import Forest from './Forest'
import { getForest } from '../actions/forests'

class ForestContainer extends Component {

  componentDidMount() {
    const id = this.props.match.params.forestId
    this.props.getForest(id)
  }

  render() {
    console.log('ForestContainer this.props:', this.props)
    return (
      <Forest forest={this.props.forest}/>
    )
  }
}

function mapStateToProps(state) {
  console.log('ForestContainer state:', state)
  return {
    forest: state.forest
  }
}

const mapDispatchToProps = {
  getForest
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestContainer)