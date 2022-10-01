import React, { Component } from 'react'
import bc from "./bc.jpg"
export default class NewsItems extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="card my-3 mx-2" style={{ width: "auto", overflow: "auto",height: "550px", backgroundColor: "black", color: "wheat", border: '1px solid white' }}>
          {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span> */}
        <img src={imageUrl ? imageUrl : bc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text"><small className="text-muted">by {author ? author : "unknown"} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" style={{ position: "relative", bottom: "10px" }} className="btn btn-warning">Read More</a>
        </div>
      </div>
    )
  }
}
