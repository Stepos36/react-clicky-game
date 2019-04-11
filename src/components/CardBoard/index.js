import React, { Component } from 'react';
import Card from './../Card'

export class CardBoard extends Component {
  render() {
    const images1 = this.props.images.slice(0,6)
    const images2 = this.props.images.slice(7,12)
    const images3 = this.props.images.slice(13,18)
    const images4 = this.props.images.slice(19,24)
    return [images1.map((image) => (
        <Card key={image.id} image={image} />
    )), images2.map((image) => (
      <Card key={image.id} image={image} />
  )), images3.map((image) => (
    <Card key={image.id} image={image} />
)), images4.map((image) => (
  <Card key={image.id} image={image} />
)) ]
  }
}

export default CardBoard
