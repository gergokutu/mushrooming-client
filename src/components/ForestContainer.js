import React, { Component } from 'react'
import { connect } from 'react-redux'
import Forest from './Forest'
import { baseUrl } from '../constants'
import * as request from 'superagent'

class ForestContainer extends Component {

  onClick = async(event)=>{
    event.preventDefault()
    await request.put(`${baseUrl}/roll/2`)
  }

  render() {
    const id = this.props.match.params.forestId
    const forests = this.props.forest
    const rightForest = forests.find(forest => forest.id === parseInt(id))
    const forest = rightForest
      ? <Forest forest={rightForest} 
          onClick={this.onClick}
        />
      : "loading..."
    return <div>
      {forest}
    </div> 
  }
}

function mapStateToProps(state) {
  return {
    forest: state.forestsList
  }
}

const mapDispatchToProps = {
  // forestId: forestId
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestContainer)