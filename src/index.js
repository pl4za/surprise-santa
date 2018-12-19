import React, { Component } from 'react'
import './styles.css'

export default class ExampleComponent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    let getRandomNumber = (min, max) => Math.random() * (max - min) + min;
    let time = 5;
    let changeAnimationTime = () => {
      let santa = document.querySelector('.santa');
      santa.style.setProperty('--animation-time', time + 's');
      santa.style.setProperty('--zero-pos', 0);
      time = getRandomNumber(2, 10);
    };

    setInterval(changeAnimationTime, time * 1000);
  }

  render() {
    return (
      <div>
        <div className="santa">HOLA</div>
      </div>
    );
  }
}
