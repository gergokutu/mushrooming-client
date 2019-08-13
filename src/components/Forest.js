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
        .id
        .filter(mushroomer => mushroomer.location === location)
      const good = forest
        .good
        .contains(location)
        ? 'good'
        : null
      const bad = forest
        .good
        .contains(location)
        ? 'bad'
        : null
      const space = <div>
        {mushroomers}
        {good}
        {bad}
      </div>
      spaces.push(space)
      location = location + 1
    }

    return <span>
      {spaces}
    </span>
  }
}

export default Forest