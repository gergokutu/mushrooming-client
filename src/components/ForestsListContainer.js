import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForestsList from './ForestsList'
import { newForest } from '../actions/forests'
import  * as request from 'superagent'
import { baseUrl } from '../constants';

class ForestsListContainer extends Component {
  state={value: ''}

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
    forests: state.forestsList
  }
}

const mapDispatchToProps = {
  newForest
}

export default connect(mapStateToProps, mapDispatchToProps)(ForestsListContainer)