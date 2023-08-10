import React, { Component } from 'react'
import './App.css'
export default class Newsitem extends Component {
  render() {
    let {title,description,imageurl,linke}=this.props;
    return (
      <div>

        <div className="card" style={{width: '18rem'}}>
        <img src={imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={linke} className="bt" target='_blank'>Read more</a>
  </div>
</div>
      </div>
    )
  }
}
