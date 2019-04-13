import React, { Component } from 'react';
import Card from './../Card';
import './CardBoard.css';

export class CardBoard extends Component {
  render() {
    const keys = [0,1,2,3]
    const images = [
      this.props.images.slice(0,6),
      this.props.images.slice(6,12),
      this.props.images.slice(12,18),
      this.props.images.slice(18,24),
    ]
    var pArray = []
    for (var i=0;i<keys.length;i++) {
      pArray.push(<p key={'p'+keys[i]}>{
        images[i].map((image) => (
          <Card handleClick = {this.props.handleClick} key={image.id} image={image} />
        ))
        }</p>)
    }
    return [
      <div className="cardBoard" key="div0">
        {pArray}
      </div>]
  }
}

export default CardBoard
