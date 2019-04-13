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
    this.setState({score: 0});
    this.setState({clickedIcons: []})
  }

  handleClick = id => {
    if(this.state.clickedIcons.includes(id)) {
      this.backToZero()

    }
    else if (this.state.score == 23) {
      this.backToZero()
    }
    else {
      this.state.clickedIcons.push(id)
      this.setState({ score: this.state.score + 1 })
      console.log(this.state.score)
      console.log(this.state.clickedIcons)
    }
    this.shuffle(this.state.images)
  }

  //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
