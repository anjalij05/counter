import './App.css';
import React, {Component} from 'react';


  
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };

    }
    reset = () => {
      this.setState({
        count: 0
      });
    }
      increment = () => {
        this.setState(state => ({
          count: state.count + 1
        }));  
      }
      decrement = () => {
        this.setState(state => ({
          count: state.count - 1
        }));
      }
    render() {
      return (
        <div>
          <button className='inc' onClick= {this.increment}>Increment</button> 
          <button className='reset' onClick={this.reset}>Reset</button>
          <button className='dec' onClick={this.decrement}>Decrement</button>
           <h1>The current count is : {this.state.count}</h1>     
        </div>
      )
    }
    }

 
 

export default App;
