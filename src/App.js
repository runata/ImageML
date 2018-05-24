import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import SignIn from './components/signIn/SignIn';
import ImageRecognition from './components/imageRecognition/ImageRecognition';
import Register from './components/register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particleOptions = {
  particles: {
      number: {
        value: 60,
        density: {
            enable: true,
            value_area: 800
        }
      }
  }
}

const app = new Clarifai.App({
  apiKey: 'af0124fef3954c7cabdd58c63b35fd03'
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '' ,
      imageURL : '' ,
      box : {},
      route : 'signin',
      isSignedIn : false,
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - ( clarifaiFace.right_col * width ),
      bottomRow:  height - (clarifaiFace.bottom_row * height)
    }
  }
  
  displayFaceBox = (box) =>{
    this.setState({box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageURL: this.state.input});
    

    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch (err => console.log(err));
  }

  onRouteChange = (route) =>{
    if (route === 'signout'){
      this.setState({ isSignedIn:false });
    } else if (route === 'home'){
      this.setState({ isSignedIn: true });
    }
    this.setState({route});
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
              params={particleOptions}
            />
        <Navigation 
          onRouteChange = {this.onRouteChange}
          isSignedIn = {this.state.isSignedIn}
          />
        
        { this.state.route === 'home' ?
          <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit} />
              <ImageRecognition
                imageURL={this.state.imageURL}
                box={this.state.box} />
            </div>
            :(
              this.state.route === 'signin' ?
              <SignIn onRouteChange = {this.onRouteChange} />
              : <Register onRouteChange = {this.onRouteChange} />
            ) 
        }
      </div>
    );
  }
}

export default App;
