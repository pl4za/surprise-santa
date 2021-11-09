import React, { Component } from 'react'
import SurpriseSanta from 'surprise-santa'
import logo from './santa.gif';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SurpriseSanta minTime={5} maxTime={60} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Merry 0 Christmas!
          <br/>
          (Santa is coming)
        </header>
      </div>
    )
  }
}
