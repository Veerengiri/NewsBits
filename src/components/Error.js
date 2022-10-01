import React, { Component } from 'react'

export default class error extends Component {
  render() {
    return (
      <div style={{height: "auto",marginTop:"20vh",paddingBottom: "70vh"}}>
        <h1 style={{color:'red'}}>Server down!.. </h1>
        <h2 style={{color:'red'}}>Please Try after sometime...</h2>
      </div>
    )
  }
}
