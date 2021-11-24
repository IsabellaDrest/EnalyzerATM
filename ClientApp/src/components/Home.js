import React, { Component } from 'react';
import "./Reset.css";
import "./Home.css";
import backArrow from "./back-arrow-icon.png"

export class Home extends Component {
  state = {
    value: "" 
  }
  

  addDigits(digit) {
    this.setState({
      value: this.state.value + digit
    });
  }

  onClickDelete = () => {
    this.setState({
      value: this.state.value.slice(0,- 1)
    });
  }

 

  render() {
    return (
    <div className="container">
        <h1> Select Amount</h1>
        <div>
          <input className="input" value={"£ " + this.state.value} />
        </div>
        <div>
          <div>
          <button className="numberButtons" onClick={() => this.addDigits(1)}>1</button>
          <button className="numberButtons" onClick={() => this.addDigits(2)}>2</button>
          <button className="numberButtons" onClick={() => this.addDigits(3)}>3</button>
          </div>
          <div>
          <button className="numberButtons" onClick={() => this.addDigits(4)}>4</button>
          <button className="numberButtons" onClick={() => this.addDigits(5)}>5</button>
          <button className="numberButtons" onClick={() => this.addDigits(6)}>6</button>
          </div>
          <div>
          <button className="numberButtons" onClick={() => this.addDigits(7)}>7</button>
          <button className="numberButtons" onClick={() => this.addDigits(8)}>8</button>
          <button className="numberButtons" onClick={() => this.addDigits(9)}>9</button>
          </div>
          <div>
          <button className="numberButtons" onClick={this.onClickDelete}><img src={backArrow}/></button>
          <button className="numberButtons"onClick={() => this.addDigits(0)}>0</button>
          </div>
        </div>
            <button className="submitButton">Submit</button>
     </div>

     
    );
   

  }
}
