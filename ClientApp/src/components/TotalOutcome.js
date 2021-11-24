import React, { Component } from "react";
import ReactDOM from "react-dom";


export class TotalOutcome extends Component {
  state = {
    value: 0,
    arry: []
  };

  valueChange(e) {
    var value = e.target.value;
    this.setState({
      value
    });
  }

  priceCalculation(stateValue) {
    const divideBy = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var resultArray = []; // getting array
    var total = stateValue; // input value get

    divideBy.map(c => {
      resultArray.push(Math.floor(total / c));
      total = total % c;
    });
    this.setState({
      arry: resultArray
    });
  }

  render() {
    const { arry } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.valueChange(e)}
        />
        <button onClick={() => this.priceCalculation(this.state.value)}>
          Get Price
        </button>
        <div>
          <p>notes 2000: - {arry[0]}</p>
          <p>notes 500: - {arry[1]}</p>
          <p>note 200: - {arry[2]}</p>
          <p>note 100: - {arry[3]}</p>
          <p>note 50: - {arry[4]}</p>
          <p>note 20: - {arry[5]}</p> <p>note 10: - {arry[6]}</p>{" "}
          <p>note 5: - {arry[7]}</p> <p>note 2: - {arry[8]}</p>{" "}
          <p>note 1: - {arry[9]}</p>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TotalOutcome />, rootElement);
