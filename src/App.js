import React, { Component } from 'react';
import CardBoard from "./components/CardBoard"
import images from './components/images.json'

class App extends Component {
  state = {
    images
  }
  render() {
    return (
      <div className="App">
        <CardBoard images={this.state.images}/> 
      </div>
    );
  }
}

export default App;
