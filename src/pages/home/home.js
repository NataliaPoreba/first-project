import React, { Component } from 'react';
import './home.scss';
class Home extends Component {

  render() {
    return (
      <div className="home" >
        <p className="name">Home</p>
        <div className="imgContiner">
          <img src={this.props.imgPath} alt="" />
        </div>
      </div>
    )
  }
}

export default Home