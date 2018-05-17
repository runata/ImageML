import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
      number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }
      }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particleOptions}
            />
        <Navigation/>
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
