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
        .find(space=>space===location)
        ? 'good'
        : null
      // const bad = forest
      //   .bad
      //   .find(location)
      //   ? 'bad'
      //   : null
      const space = <div>
        {mushroomers}
        {good}
        {/* {bad} */}
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