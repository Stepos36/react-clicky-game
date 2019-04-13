import React, { Component } from 'react';
import CardBoard from "./components/CardBoard";
import images from './components/images.json';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import ScoreRow from "./components/ScoreRow";
import Footer from "./components/Footer";
import anime from 'animejs';
import Modal from "react-responsive-modal";
import './App.css'

class App extends Component {
  state = {
    score: 0,
    images,
    clickedIcons: [],
    titleMsg: '',
    open: false,
    signClass: 'neutral'
  }

  backToZero = () => {
    this.setState({score: 0});
    this.setState({clickedIcons: []})
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  restartGame = () => {
    this.backToZero();
    this.render();
    this.onCloseModal()
  }

  handleClick = id => {
    if(this.state.clickedIcons.includes(id)) {
      anime({
        targets: '.icon',
        translateX: anime.stagger(10, {grid: [6, 4], from: 'center', axis: 'x'}),
        translateY: anime.stagger(10, {grid: [6, 4], from: 'center', axis: 'y'}),
        rotateZ: anime.stagger([0, 135], {grid: [6, 4], from: 'center', axis: 'x'}),
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: 1,
        duration: 1000
      });
      this.setState({titleMsg: 'You lose!'})
      this.onOpenModal()
      this.setState({ signClass: 'lose' });
      setTimeout(() => {
        this.setState({ signClass: 'neutral' });
      }, 500)
    }
    else if (this.state.score === 23) {
      this.onOpenModal()
      this.setState({titleMsg: 'You win!'})
    }
    else {
      this.state.clickedIcons.push(id)
      this.setState({ score: this.state.score + 1 })
      console.log(this.state.score)
      console.log(this.state.clickedIcons)
      this.shuffle(this.state.images)
      this.setState({ signClass: 'win' });
      setTimeout(() => {
        this.setState({signClass: 'neutral'})
      }, 500)
    }
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
    const { open } = this.state;
    return (
      <div className="App">
      <Navbar/>
        <ScoreRow class={this.state.signClass} score={this.state.score} />
      <Wrapper>
        <CardBoard images={this.state.images}  handleClick = {this.handleClick}  /> 
        <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>{this.state.titleMsg}</h2>
          <p>
            You scored {this.state.score} clicks.
          </p>
          <button className='btn btn-info' onClick={() => this.restartGame()}>Play again</button>
        </Modal>
      </div>
      </Wrapper>
      <Footer />
      </div>
      
    );
  }
}

export default App;
