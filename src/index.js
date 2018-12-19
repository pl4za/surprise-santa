import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import santa from './santa';

export default class SurpriseSanta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAnimation: 'santa-move-right'
    };
  }

  componentDidMount = () => {
    let getRandomNumber = (min, max) => Math.random() * (max - min) + min;
    let updateCurrentAnimation = () => this.state.currentAnimation === 'santa-move-right' ?
    this.setState({currentAnimation: 'santa-move-left'}) : this.setState({currentAnimation: 'santa-move-right'});

    let time = 5;
    let animate = () => {
      let santa = document.querySelector('.santa');
      santa.style.display = 'block';
      santa.style.setProperty('--animation', this.state.currentAnimation);
      santa.style.setProperty('--animation-time', time + 's');
      updateCurrentAnimation();
      setTimeout(() => santa.style.display = 'none', time * 1000);
    };

    setInterval(animate, getRandomNumber(this.props.minTime || 60, this.props.maxTime || 120) * 1000);
  }

  render() {
    return (
      <div className={this.state.currentAnimation === 'santa-move-left' ? 'santa left' : 'santa right'}>
        <img src={santa} />
      </div>
    );
  }
}

SurpriseSanta.propTypes = {
  minTime: PropTypes.number,
  maxTime: PropTypes.number
};
