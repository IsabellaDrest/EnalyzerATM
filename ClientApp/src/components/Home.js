import React, { Component } from 'react';

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {userInput: "" }
  }

  //The functions that adds another number to the display window

  onClick1 = () => {
    this.setState({
      userInput: this.state.userInput + "1"
    })
  }
  
  onClick2 = () => {
    this.setState({
      userInput: this.state.userInput + "2"
    })
  }
  onClick3 = () => {
    this.setState({
      userInput: this.state.userInput + "3"
    })
  }
  onClick4 = () => {
    this.setState({
      userInput: this.state.userInput + "4"
    })
  }
  onClick5 = () => {
    this.setState({
      userInput: this.state.userInput + "5"
    })
  }
  onClick6 = () => {
    this.setState({
      userInput: this.state.userInput + "6"
    })
  }
  onClick7 = () => {
    this.setState({
      userInput: this.state.userInput + "7"
    })
  }
  onClick8 = () => {
    this.setState({
      userInput: this.state.userInput + "8"
    })
  }
  onClick9 = () => {
    this.setState({
      userInput: this.state.userInput + "9"
    })
  }
  onClickDelete = () => {
    this.setState({
      userInput: this.state.userInput.substr(0, this.state.userInput.length - 1)
    })
  }

  onClick0 = () => {
    this.setState({
      userInput: this.state.userInput + "0"
    })
  }


  render() {
    return (
    <div>
        <h1> Select Amount</h1>
        <div>
          <input id="my_field" value={"£ " + this.state.userInput}/>
        </div>
        <div>
          <div>
          <button onClick={this.onClick1}>1</button>
          <button onClick={this.onClick2}>2</button>
          <button onClick={this.onClick3}>3</button>
          </div>
          <div>
          <button onClick={this.onClick4}>4</button>
          <button onClick={this.onClick5}>5</button>
          <button onClick={this.onClick6}>6</button>
          </div>
          <div>
          <button onClick={this.onClick7}>7</button>
          <button onClick={this.onClick8}>8</button>
          <button onClick={this.onClick9}>9</button>
          </div>
          <div>
          <button onClick={this.onClickDelete}>Delete</button>
          <button onClick={this.onClick0}>0</button>
          </div>
        </div>
            <input type="submit" value="Submit" />
     </div>

     
    );
   

  }
}
