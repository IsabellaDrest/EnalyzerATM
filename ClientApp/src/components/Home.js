import React, { Component} from 'react';
import "./Reset.css";
import "./Home.css";
import backArrow from "./back-arrow-icon.png"
import note from "./500-bill.png"
import coin from "./coin.png"

export class Home extends Component {
  state = {
    value: "", 
    array: [],
    isClicked: false
  };


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

  calculator(value) {
    const divisible = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var outcomeArray = [];
    var total = value;

      divisible.map(c => {
        outcomeArray.push(Math.floor(total / c));
        total = total % c;
      });
      this.setState({
        array : outcomeArray
      });
  }



  render() {
    return (
          <div className="container">
            {!this.state.isClicked &&
              <div className="inputBox">
                <h1> Select Amount</h1>
                <div>
                  <input className="input" value={"£ " + this.state.value} />
                </div>
                <div className="inputBox">
                  <div className="inpuBox">
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
                  <button className="numberButtons" onClick={this.onClickDelete}><img className="backArrow"src={backArrow}/></button>
                  <button className="numberButtons"onClick={() => this.addDigits(0)}>0</button>
                  </div>
                </div>
              
                  <button className="submitButton" onClick={() => {this.calculator(this.state.value);
                                                                    this.state.isClicked = true;}}>Submit</button>     
              </div>
            }

          {this.state.isClicked &&
            <div>
              <div className="allMoney">
                <button className="backButton" onClick={() => {this.state.isClicked = false; this.setState({value: ""})}}><img className="backArrow"src={backArrow}/></button>
                <h1>Depositing</h1>
                <div>
                    <input className="input" value={"£ " + this.state.value} />
                  </div>
                  {this.state.array[0] != 0 &&
                    <div className="moneyBox">
                      <img src={note} className="noteImage"/>
                    <p>{this.state.array[0]} x 1000</p>
                    </div>
                  }

                  {this.state.array[1] != 0 &&
                    <div className="moneyBox">
                      <img src={note} className="noteImage"/>
                    <p>{this.state.array[1]} x 500</p>
                    </div>
                  }
                  {this.state.array[2] != 0 &&
                    <div className="moneyBox">
                    <img src={note} className="noteImage"/>
                    <p>{this.state.array[2]} x 200</p>
                    </div>
                  }
                  {this.state.array[3] != 0 &&
                    <div className="moneyBox">
                    <img src={note} className="noteImage"/> 
                    <p>{this.state.array[3]} x 100</p>
                    </div>
                  }
                  {this.state.array[4] != 0 &&
                    <div className="moneyBox">
                    <img src={note} className="noteImage"/> 
                    <p>{this.state.array[4]} x 50</p>
                    </div>
                  }
                  {this.state.array[5] != 0 &&
                    <div className="moneyBox">
                    <img src={coin} className="noteImage"/> 
                    <p>{this.state.array[5]} x 20</p> 
                    </div>
                  }
                  {this.state.array[6] != 0 &&
                    <div className="moneyBox">
                    <img src={coin} className="noteImage"/> 
                    <p>{this.state.array[6]} x 10</p>{" "}
                    </div>
                  }
                  {this.state.array[7] != 0 &&
                    <div className="moneyBox">
                    <img src={coin} className="noteImage"/> 
                    <p>{this.state.array[7]} x 5</p> 
                    </div>
                  }
                  {this.state.array[8] != 0 &&
                    <div className="moneyBox">
                    <img src={coin} className="noteImage"/> 
                    <p>{this.state.array[8]} x 2</p>{" "}
                    </div>
                  }
                  {this.state.array[9] != 0 &&
                    <div className="moneyBox">
                    <img src={coin} className="noteImage"/> 
                    <p>{this.state.array[9]} x 1</p>
                    </div>
                  }
              </div>
              <p className="bottomText">Thank you for using <br/> Enalyzer ATM</p>
            </div>
          }
     </div>

     
    );
   
  }
}

