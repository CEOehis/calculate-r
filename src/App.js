import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';

class App extends Component {
  constructor() {
    super();

    this.onTap = this.onTap.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.operate = this.operate.bind(this);

    this.state = {
      result: 0,
      operation: '',
      isDecimal: false,
      display: '0',
      operand1: '',
      tracking: true
    }

  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      this.onTap(event.key)
    });
  }

  onTap(value) {
    if(!this.state.tracking) {
      if(!Number.isNaN(+value)) {
        this.setState((prevState) => {
          return {display: '0', tracking: true}
        })
      }
    }
    this.handleInput(value);
  }

  handleInput(value) {
    switch (value) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(this.state.display === '0') {
          this.setState((prevState) => {
            return {display: value}
        });
          return;
        }
        this.setState((prevState) => {
          if(prevState.display === '0') return {display: value}
          return {display: prevState.display + value}
        });
        break;
      case '0':
        if(this.state.display === '0') return;
        this.setState({
          display: this.state.display + value
        });
        break;
      case 'clear':
      case 'Backspace':
        this.setState({
          display: '0',
          isDecimal: false
        });
        break;
      case '.':
        if(this.state.isDecimal) {
          if(this.state.display.indexOf('.') === this.state.display.length - 1) {
            this.setState({
              display: this.state.display.slice(0, this.state.display.length - 1),
              isDecimal: false
            });
          }
          return;
        }
        this.setState({
          display: this.state.display + value,
          isDecimal: true
        })
        break;
      case '+':
        if(this.state.operand1) {
          var sum = this.operate();
          this.setState((prevState) => {
            return {
              operation: 'add',
              operand1: sum,
              tracking: false,
              display: sum
            }
          })
          return;
        }
        this.setState({
          operation: 'add',
          operand1: this.state.display,
          tracking: false
        });
        break;
      case '-':
        if(this.state.operand1) {
          var sum = this.operate();
          this.setState((prevState) => {
            return {
              operation: 'subtract',
              operand1: sum,
              tracking: false,
              display: sum
            }
          })
          return;
        }
        this.setState({
          operation: 'subtract',
          operand1: this.state.display,
          tracking: false
        });
        break;
      case '÷':
      case '/':
        if(this.state.operand1) {
          var sum = this.operate();
          this.setState((prevState) => {
            return {
              operation: 'divide',
              operand1: sum,
              tracking: false,
              display: sum
            }
          })
          return;
        }
        this.setState({
          operation: 'divide',
          operand1: this.state.display,
          tracking: false
        });
        break;
      case 'x':
      case '*':
        if (this.state.operand1) {
          var sum = this.operate();
          this.setState((prevState) => {
            return {
              operation: 'multiply',
              operand1: sum,
              tracking: false,
              display: sum
            }
          })
          return;
        }
        this.setState({
          operation: 'multiply',
          operand1: this.state.display,
          tracking: false
        });
        break;
      case 'Enter':
        if (this.state.operand1) {
          var sum = this.operate();
          this.setState((prevState) => {
            return {
              operation: '',
              operand1: '',
              tracking: false,
              display: sum
            }
          })
          return;
        }
        break;
    }
  }

  operate() {
    var num1 = +this.state.operand1;
    var num2 = +this.state.display;
    var { operation } = this.state;
    switch (operation) {
      case 'add':
        return num1 + num2
      case 'subtract':
        return num1 - num2
      case 'multiply':
        return num1 * num2
      case 'divide':
        return num1 / num2
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="app">
        <Screen className="screen" display={this.state.display}  />
        <div className="buttons">
          <Button onTap={this.onTap} className="btn" style={{gridColumn: 'span 3', fontSize: '18px'}}>clear</Button>
          <Button onTap={this.onTap} className="btn operator">÷</Button>
          <Button onTap={this.onTap} className="btn">7</Button>
          <Button onTap={this.onTap} className="btn">8</Button>
          <Button onTap={this.onTap} className="btn">9</Button>
          <Button onTap={this.onTap} className="btn operator">x</Button>
          <Button onTap={this.onTap} className="btn">4</Button>
          <Button onTap={this.onTap} className="btn">5</Button>
          <Button onTap={this.onTap} className="btn">6</Button>
          <Button onTap={this.onTap} className="btn operator">-</Button>
          <Button onTap={this.onTap} className="btn">1</Button>
          <Button onTap={this.onTap} className="btn">2</Button>
          <Button onTap={this.onTap} className="btn">3</Button>
          <Button onTap={this.onTap} className="btn operator">+</Button>
          <Button onTap={this.onTap} className="btn">0</Button>
          <Button onTap={this.onTap} className="btn">.</Button>
          <Button onTap={this.onTap} className="btn"></Button>
          <Button onTap={this.onTap} className="btn operator">=</Button>
        </div>
      </div>
    );
  }
}

export default App;
