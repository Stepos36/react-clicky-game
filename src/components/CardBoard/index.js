import React, { Component } from 'react';
import Card from './../Card'

export class CardBoard extends Component {
  render() {
    return this.props.images.map((image) => (
        <Card key={image.id} image={image} />
    ))
  }
}

export default CardBoard
