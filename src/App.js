import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Faqs from './pages/faqs/faqs';
import About from './pages/about/about';
import Support from '.pages/support/support';

import Button from './components/button/button'
import './App.css';
import './App.scss';



class App extends Component {
  render (){ 
    return (

      <div>
        <Router>
        <ul className="nav">
        <li><p>PO PROSTU CV</p></li>
          <li> <Link to="/">
            <p>Home</p>
          </Link></li>
          <li> <Link to="/contact">
            <p>Contact</p>
          </Link></li>
          <li>
            <Link to="/faqs">
              <p>Faqs</p>
            </Link>
          </li>
          <li>
          <Link to="/about">
            <p>About</p>
          </Link>
          </li>
          <li>
          <Link to="/support">
            <p>Support</p>
          </Link>
        </li>
        </ul>


        <Route exact path="/" >
          <Home imgPath='./components/picture/zdjecie1.jpg'></Home>
        </Route>
        <Route exact path="/contact" >
          <Contact></Contact>
        </Route>
        <Route exact path="/faqs">
          <Faqs></Faqs>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/support">
          <Support></Support>
        </Route>

        </Router> 

     
       

      <div className="app">
        <h1> Szybki i prosty kreator CV online</h1>
        <p>W kreatorze PO PROSTU CV znajdziesz profesjonalne szablony CV do wypełnienia i stworzysz CV online w kilka minut.</p>
        <Button/>
      </div>
      </div>
    )}}
  export default App; 
 
   // <button className="Button" onclick> Przykładowe CV </button>
        // <button className="Button" > Stwórz własne CV </button>
  // <button click={this.switchNameHandler.bind(this, 'Max!')} changed = {this.nameChangedHandler}></button>


  
  // <Route exact path="/support" component={Support} />