import React, { Component } from 'react'
import loading from './loding.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{height:"90vh"}}>
        <img style={{marginTop: "50px"}} src={loading} alt="loading" />
      </div>
    )
  }
}
