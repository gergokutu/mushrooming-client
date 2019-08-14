import React from 'react'
import './Forest.css'
import { connect } from 'react-redux'
import * as request from 'superagent'
import { baseUrl } from '../constants'

class Forest extends React.Component {
    
  onClick = async(event)=>{
    event.preventDefault()
    await request.put(`${baseUrl}/roll/1`)
  }

  render() {
    const { forestId } = this.props.match.params

    const forest = this.props.forest.find(forest => {
      return forest.id===parseInt(forestId)
    })
    let location = 0
    const spaces = []

    
    while (forest.name && location < 36) {
      const mushroomers = forest
        .mushroomers
        .filter(mushroomer => mushroomer.location === location)
      const good = forest
        .good
        .includes(location)
        ? 'good'
        : null
      const bad = forest
        .bad
        .includes(location)
        ? 'bad'
        : null
      const space = <span key={location} className='space'>
        {location}
        {mushroomers.map(mushroomer => mushroomer.userId)}
        {good}
        {bad}
      </span>
      spaces.push(space)
      location = location + 1
    }

    return <span>
      <h3>{forest.name}</h3>
      {spaces}
      <div>
      <button className='dieButton' onClick={this.onClick}>Roll a die</button>
      </div>
    </span>
  }
}
function mapStateToProps(state) {
  return {
    forest: state.forestsList
  }
}


export default connect(mapStateToProps)(Forest)