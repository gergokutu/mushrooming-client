import React from 'react'

class Forest extends React.Component {

  render() {
    const { forest } = this.props
    console.log('forest:', forest.name)
    let location = 0
    const spaces = []

    
    while (forest.name && location < 36) {
      console.log('While forest:', forest)
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
      const space = <div key={location}>
        {location}
        {good}
        {bad}
      </div>
      spaces.push(space)
      location = location + 1
    }

    return <span>
      <h3>{forest.name}</h3>
      {spaces}
    </span>
  }
}

export default Forest