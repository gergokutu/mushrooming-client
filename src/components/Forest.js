import React from 'react'
import './Forest.css'
class Forest extends React.Component {

  render() {
    console.log('Forest:', this.props)
    const { forest } = this.props
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
      <button className='dieButton' onClick={this.props.onClick}>Roll a die</button>
      </div>
    </span>
  }
}

export default Forest