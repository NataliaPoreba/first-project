import React, { Component } from 'react';
import './przykladowe.scss';
class Home extends Component {

  render() {
    return (
      <div className="przykladowe" >
        <p className="name"></p>
        <div className="imgContiner">
          <img src={this.props.imgPath} alt="" />
        </div>
      </div>
    )
  }
}

export default Home