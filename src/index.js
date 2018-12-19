import React, { Component } from 'react'
import './styles.css'

export default class ExampleComponent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    let getRandomNumber = (min, max) => Math.random() * (max - min) + min;
    let currentAnimation = 'santa-move-right';
    let updateCurrentAnimation = () => currentAnimation === 'santa-move-right' ?
      currentAnimation = 'santa-move-left' : currentAnimation = 'santa-move-right';

    let time = 5;
    let animate = () => {
      let santa = document.querySelector('.santa');
      santa.style.display = 'block';
      santa.style.setProperty('--animation', currentAnimation);
      santa.style.setProperty('--from', getRandomNumber(0, 100) + '%');
      santa.style.setProperty('--to', getRandomNumber(0, 100) + '%');
      santa.style.setProperty('--animation-time', time + 's');
      updateCurrentAnimation();
      setTimeout(() => santa.style.display = 'none', time * 1000);
    };

    setInterval(animate, getRandomNumber(time, 10) * 1000);
  }

  render() {
    return (
      <div className="santa">HOLA</div>
    );
  }
}
