import React, { Component } from 'react';

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
    const { arry } = this.state;
    return (
    <div>
        <h1> Select Amount</h1>
        <div>
          <input id="my_field" value={"£ " + this.state.value} />
        </div>
        <div>
          <div>
          <button onClick={() => this.addDigits(1)}>1</button>
          <button onClick={() => this.addDigits(2)}>2</button>
          <button onClick={() => this.addDigits(3)}>3</button>
          </div>
          <div>
          <button onClick={() => this.addDigits(4)}>4</button>
          <button onClick={() => this.addDigits(5)}>5</button>
          <button onClick={() => this.addDigits(6)}>6</button>
          </div>
          <div>
          <button onClick={() => this.addDigits(7)}>7</button>
          <button onClick={() => this.addDigits(8)}>8</button>
          <button onClick={() => this.addDigits(9)}>9</button>
          </div>
          <div>
          <button onClick={this.onClickDelete}>Delete</button>
          <button onClick={() => this.addDigits(0)}>0</button>
          </div>
        </div>
            <input type="submit" value="Submit" />
     </div>

     
    );
   

  }
}
