import React, { Component } from 'react';
import './Card.css'

export class Card extends Component {
  render() {
    return (
        <span className="card">
          <img alt={this.props.image.title} src={this.props.image.image} />
        </span>
    )
  }
}

export default Card
