import React, { Component } from 'react'

export default class CBCPropEx extends Component {
  render() {
    return (
      <div>CBCPropEx
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
            this.props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
        <h1>{this.props.address.city}</h1>
        <button onClick={this.props.sendFun}>click</button>
      </div>
    )
  }
}




