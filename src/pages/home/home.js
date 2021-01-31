import React, { Component } from 'react';
import './home.scss';
import Button from './button'

class Home extends Component {

  render() {
    return (
      <div className="home" >
        <p className="name"></p>
        <div className="imgContiner">
          <img src={this.props.imgPath} alt="" />
        </div>
        <div className="app">
        <h1> Szybki i prosty kreator CV online</h1>
        <p>W kreatorze PO PROSTU CV znajdziesz profesjonalne szablony CV do wypełnienia i stworzysz CV online w kilka minut.</p>
        <Button/>
      </div>
      </div>
    )
  }
}

export default Home