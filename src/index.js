import React, { Component } from 'react'
import './styles.css'

export default class ExampleComponent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    let getRandomNumber = (min, max) => Math.random() * (max - min) + min;
    let time = getRandomNumber(2, 10);
    let animate = () => {
      let santa = document.querySelector('.santa');
      santa.style.setProperty('--from-top-pos', getRandomNumber(0, 100) + '%');
      santa.style.setProperty('--to-top-pos', getRandomNumber(0, 100) + '%');
      santa.style.setProperty('--animation-time', time + 's');
    };

    setInterval(animate, time * 1000);
  }

  render() {
    return (
      <div>
        <div className="santa">HOLA</div>
      </div>
    );
  }
}
