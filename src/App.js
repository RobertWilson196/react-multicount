import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    value:0
  }

  this.plusOne = this.plusOne.bind(this);
  this.plusTwo = this.plusTwo.bind(this);
  this.plusThree = this.plusThree.bind(this);
  this.resetCount = this.resetCount.bind(this);

}

  plusOne() {
    this.setState({value: this.state.value + 1});
  }
  plusTwo() {
    this.setState({value: this.state.value + 2});
  }
  plusThree() {
    this.setState({value: this.state.value + 3});
  }
  resetCount() {
    this.setState({value: 0});
  }
  
  render() {
    return (
      <div>
        <div>
          <h1 class="App-center">{this.state.value}</h1>
        </div>
        <div class="App-center button-margin top-button-margin">
          <button onClick={this.plusOne}>1</button>
          <button onClick={this.plusTwo}>2</button>
          <button onClick={this.plusThree}>3</button>
        </div>
        <div class="App-center button-margin top-button-margin">
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
