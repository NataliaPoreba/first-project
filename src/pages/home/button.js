// export default Button;
import React, { Component } from 'react';
import './button.scss'




class Button extends Component {

    render () {
        

    return (
    <div className="buttons"> 
        <button className="button1" onClick={()=>{window.location.href = "/przykladowe"}} type="button" >Przykładowe CV</button>
        <button className="button2"  onClick={()=>{window.location.href = "/faqs"}} type="button">Stwórz nowe CV</button>
    </div>
    )}
}

export default Button;
