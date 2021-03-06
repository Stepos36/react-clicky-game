import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  render() {
    return (
        <span className="icon hvr-grow">
          <img alt={this.props.image.title} src={process.env.PUBLIC_URL+this.props.image.image} onClick={() => this.props.handleClick(this.props.image.id)} />
        </span>
    )
  }
}

export default Card
