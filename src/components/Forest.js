import React from 'react'
import './Forest.css'
import { Link } from 'react-router-dom'
class Forest extends React.Component {

  showStartButton = () => {
    if (this.props.forest.status === 'joining') {
      return <div>
        <button className='startGame, button' onClick={this.props.onClickStart}>Start Game</button>
      </div>
    }
  }

  showJoinButton = () => {
    if (this.props.forest.status === 'joining') {
      return <div>
        <button className='joinGame, button' onClick={this.props.onClickJoin}>Join</button>
      </div>
    }
  }

  showRollButton = () => {
    if (this.props.forest.status === 'started') {
      return <div>
        <button className='dieButton, button' onClick={this.props.onClickRoll}>Roll a dice</button>
      </div>
    }
  }

  calculatePoints = (mushroomer) => {
    return mushroomer.good - mushroomer.bad
  }

  showWinner = () => {
    if (this.props.forest.status === 'finished') {
      const mushroomers = this.props.forest.mushroomers

      const winner = mushroomers.reduce(
        (winner, mushroomer) => {
          return this.calculatePoints(winner) > this.calculatePoints(mushroomer)
            ? winner
            : mushroomer
        }, 0)

      return <h3 className='winnerText'>
        <img
          className='trophy'
          src='https://img.pngio.com/trophy-png-51465-png-images-pngio-png-trophy-1024_1024.png' alt='trophy'
        />
        The winner is <b className='winnerName'>{winner.nickname}</b> with number of points: <b>{this.calculatePoints(winner)}</b>
        <img
          className='trophy'
          src='https://img.pngio.com/trophy-png-51465-png-images-pngio-png-trophy-1024_1024.png'
          alt='trophy'
        />
      </h3>
    }
  }

  showMushroomers = () => {
    const mushroomers = this.props.forest.mushroomers

    if (mushroomers) {
      return mushroomers.map(mushroomer => {
        return <div key={mushroomer.id} className='displayMushroomers'>
          <p className='mushroomerInfo'>nickname: {mushroomer.nickname}</p>
          <p className='mushroomerInfo'>number of good mushrooms: {mushroomer.good}</p>
          <p className='mushroomerInfo'>number of bad mushrooms: {mushroomer.bad}</p>
          <p className='mushroomerInfo'>number of points: {this.calculatePoints(mushroomer)}</p>
        </div>
      })
    }
  }

  displayLocation = (location) => {
    if (location === 0) {
      return 'START'
    } else if (location === 35) {
      return 'FINISH'
    } else {
      return location
    }
  }

  render() {
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
        ? <img className='mushrooms' src='https://cdn.pixabay.com/photo/2013/07/13/12/39/mushroom-160043_960_720.png' alt='good' />
        : null

      const bad = forest
        .bad
        .includes(location)
        ? <img className='mushrooms' src='https://cdn.pixabay.com/photo/2012/04/01/18/27/mushroom-23893_1280.png' alt='bad' />
        : null

      const space = <div key={location} className='space'>
        <div className='location'>{this.displayLocation(location)}</div>
        <div>{mushroomers.map(mushroomer => <div className='nickname'>{mushroomer.nickname}</div>)}</div>
        <div>{good}</div>
        <div>{bad}</div>
      </div>

      spaces.push(space)
      location = location + 1
    }

    return <div className='forest'>
      <h3 className='title'>{forest.name}</h3>

      <div>
        <Link to={`/forest`}>
          <button className='ButtonBack, button' onClick={this.props.onClickBack}>Go Back</button>
        </Link>
      </div>
      
      {this.showJoinButton()}
      {this.showStartButton()}
      {this.showWinner()}
      <div className='board'>{spaces}</div>
      <div className='emptyForest'></div>
      {this.showRollButton()}
      {this.showMushroomers()}
    </div>
  }
}

export default Forest