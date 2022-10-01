import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Notfoun extends Component {
  render() {
    let a="->"
    return (
      <div>
        <h1 style={{color: "blue",height: "100vh"}}>No results found!</h1>
        <h2>go to {a} home</h2>
      </div>
    )
  }
}
