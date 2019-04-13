import React, { Component } from 'react';
import CardBoard from "./components/CardBoard";
import images from './components/images.json';

class App extends Component {
  state = {
    score: 0,
    images,
    clickedIcons: []
  }

  backToZero = () => {
    this.setState({score: 0})
    this.setState({clickedIcons: []})
  }

  handleClick = id => {
    if(this.state.clickedIcons.includes(id)) {
      alert('loss')
      this.backToZero()
    }
    else if (this.state.score == 23) {
      alert('win')
      this.backToZero()
    }
    else {
      this.state.clickedIcons.push(id)
      this.setState({ score: this.state.score + 1 })
      console.log(this.state.score)
      console.log(this.state.clickedIcons)
    }
  }

  render() {
    return (
      <div className="App">
        <CardBoard handleClick = {this.handleClick} score = {this.state.score} images={this.state.images}/> 
      </div>
    );
  }
}

export default App;
