import React, { Component } from 'react';
import './App.css';
import { quotes } from './quotes.json';
import Quote from './Components/Quote.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      quote: 'click the button to generate a quote.'
    }
  }

  generateQuote() {
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    this.setState({quote: quote});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Quote Generator </h1>
          <button onClick={() =>this.generateQuote()}> Generate </button>
        </div>
        <p className="App-intro">
          <Quote quote={this.state.quote} />
        </p>
        <small></small>
      </div>
    );
  }
}

export default App;
