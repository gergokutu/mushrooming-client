import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForestsList from './ForestsList'
import { newForest } from '../actions/forests'
import  * as request from 'superagent'
import { baseUrl } from '../constants';

class ForestsListContainer extends Component {
  state={value: ''}
  // onClick= async(event) =>{
  //   const userId=this.props.login.userId
  //   console.log('this.props', this.props)
  //   const forestId=this.props.params.id
  //   await request.post(`${baseUrl}/join/${forestId}`)
  //   .send({id: userId})

  // }

  onChange=(event) =>{
    this.setState({value: event.target.value})  
  }
  onSubmit=async(event) => {
    event.preventDefault()
    await request.post(`${baseUrl}/forest`)
    .send({name: this.state.value})
    this.setState({value: ''})
  }

  render() {
    return <div>
      <ForestsList 
      forestsList={this.props.forests}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      value={this.state.value}/>
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
  newForest
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestsListContainer)