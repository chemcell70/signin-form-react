import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Link } from 'react-router';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div id="container">
        
        <form>
        <h3>Account Login</h3>
        <br/>
        <h5>USERNAME</h5>
        <input
          type="text"
        /><br/><br/>
        <h5>PASSWORD </h5>
        <input
          type="password"
        /><br/><br/>
        <button type="submit" className="btn btn-danger">login</button>
      </form>
      <br/>
      <p>Forgot Password / Username?</p>
      </div>

      

      
      
    );
  }
}


render(<App />, document.getElementById('root'));


