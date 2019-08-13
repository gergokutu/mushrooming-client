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
    return <div>
      <Forest forest={this.props.forest}/>
    </div> 
  }
}

function mapStateToProps(state) {
  return {
    forest: state.forestsList
  }
}

const mapDispatchToProps = {
  getForest
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestContainer)