import React, { Component } from 'react'
import SurpriseSanta from 'surprise-santa'

export default class App extends Component {
  render () {
    return (
      <div>
        <SurpriseSanta minTime={5} maxTime={60}/>
      </div>
    )
  }
}
