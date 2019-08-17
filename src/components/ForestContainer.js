import React, { Component } from 'react'
import { connect } from 'react-redux'
import Forest from './Forest'
import { baseUrl } from '../constants'
import * as request from 'superagent'


class ForestContainer extends Component {
  getForest = () => {
    const id = this.props.match.params.forestId
    const { forests } = this.props
    return forests.find(forest => forest.id === parseInt(id))
  }

  onClickRoll = async (event) => {
    event.preventDefault()
    const userId = this.props.login.userId
    const forest = this.getForest()
    const mushroomer = forest.mushroomers.find(mushroomer => mushroomer.userId === userId)

    mushroomer.id && await request
      .put(`${baseUrl}/roll/${mushroomer.id}`)
  }

  onClickStart = async (event) => {
    event.preventDefault()
    const { forestId } = this.props.match.params
    await request.put(`${baseUrl}/start/${forestId}`)
  }

  onClickJoin = async (event) => {
    event.preventDefault()
    const { forestId } = this.props.match.params
    const userId = this.props.login.userId
    await request.post(`${baseUrl}/join/${forestId}`)
      .send({ id: userId })

  }

  render() {
    const rightForest = this.getForest()
    const forest = rightForest
      ? <Forest forest={rightForest}
        onClickRoll={this.onClickRoll}
        onClickStart={this.onClickStart}
        onClickBack={this.onClickBack}
        onClickJoin={this.onClickJoin}
      />
      : "loading..."
    return <div>
      {forest}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    forests: state.forestsList,
    login: state.login
  }
}

const mapDispatchToProps = {
  // forestId: forestId
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestContainer)