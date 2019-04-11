import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
        <div className="card">
        <div className="img-container">
          <img alt={this.props.image.title} src={this.props.image.image} />
        </div>
      </div>
    )
  }
}

export default Card
