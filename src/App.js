import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Screen className="screen" />
        <div className="buttons">
          <Button className="btn" style={{gridColumn: 'span 3', fontSize: '18px'}}>clear</Button>
          <Button className="btn operator">÷</Button>
          <Button className="btn">7</Button>
          <Button className="btn">8</Button>
          <Button className="btn">9</Button>
          <Button className="btn operator">x</Button>
          <Button className="btn">4</Button>
          <Button className="btn">5</Button>
          <Button className="btn">6</Button>
          <Button className="btn operator">-</Button>
          <Button className="btn">1</Button>
          <Button className="btn">2</Button>
          <Button className="btn">3</Button>
          <Button className="btn operator">+</Button>
          <Button className="btn">0</Button>
          <Button className="btn">.</Button>
          <Button className="btn"></Button>
          <Button className="btn operator">=</Button>
        </div>
      </div>
    );
  }
}

export default App;
