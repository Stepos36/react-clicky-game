import React, { Component } from 'react';
import Card from './../Card';
import './CardBoard.css'

export class CardBoard extends Component {
  render() {
    const keys = [0,1,2,3]
    const images1 = this.props.images.slice(0,6)
    const images2 = this.props.images.slice(6,12)
    const images3 = this.props.images.slice(12,18)
    const images4 = this.props.images.slice(18,24)
    return [
        <p key={'p'+keys[0]}>{
        images1.map((image) => (
          <Card key={image.id} image={image} />
        ))
        }</p>,
        <p key={'p'+keys[1]}>{ 
        images2.map((image) => (
          <Card key={image.id} image={image} />
        ))
        }</p>,
        <p key={'p'+keys[2]}>{
        images3.map((image) => (
        <Card key={image.id} image={image} />
        ))
        }</p>,
        <p key={'p'+keys[3]}>{ 
        images4.map((image) => (
          <Card key={image.id} image={image} />
        ))
        }</p>]
  }
}

export default CardBoard
