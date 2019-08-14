import React, { Component } from 'react'
import { connect } from 'react-redux'
import Forest from './Forest'
import * as request from 'superagent'
import { baseUrl } from '../constants'
import { parse } from '@babel/core';

class ForestContainer extends Component {

  // componentDidMount() {
  //   const id = this.props.match.params.forestId
  //    this.props.getForest(id)
  // }
  // onSubmit = async(event)=>{
  //   event.preventDefault()
  //   await request.
  //   put(`${baseUrl}/mushroomer/:id`)
  //   .send({})

  // }
  // onSubmit = async (event) => {
  //   event.preventDefault()

  //   await request
  //     .post(`${url}/message`)
  //     .send({
  //       message: this.state.message,
  //       user: this.props.user,
  //       channelId: this.props.channelId
  //     })

  //   this.setState({ message: '' })
  // }

  // onChange = (event) => {
  //   const { value } = event.target

  //   this.setState({ message: value })
  // }


  render() {
    console.log(this.props.forest)
    const { forestId } = this.props.match.params
    // console.log('forest ID',forestId)
    const forest = this.props.forest.find(forest => {
      return forest.id===parseInt(forestId)
    })
    console.log('forest test', forest)
    return <div>
      {console.log('props forestcontainer',this.props)}
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
  // getForest
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestContainer)