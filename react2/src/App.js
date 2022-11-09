import React from "react";
import './index';
import Main from "./Main";
import SeasonDisplay from "./SeasonDisplay";
import Clock from './Clock';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: {
          firstName: "",
          lastName: "Social pilot"
        }
      },
      place: '',
      latitude: '',
      longitude: '',
      month: new Date(),
      error: '',
      hemisphere:''
    }
  }


  handleClick = () => {

    //when you don't require the previous state to set the state then this is used
    // this.setState({
    //   // user:{
    //   //   name:{
    //   //     firstName:'Gyanendra',
    //   //     lastName:'Shah'
    //   //   }
    //   // }
    // })

    //when you required the previous state value for updating the current state 
    this.setState(newState => {
      newState.user.name.firstName = 'Gyanendra'
      return newState
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          hemisphere:position.coords.latitude>0?'N':'S'
        })
      },
      err => {
        console.error(err)
        this.setState({
          error: err.message
        })
      }
    );
  }

  getPosition = () => {
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${this.state.latitude}&lon=${this.state.longitude}&apiKey=90a20e3c2c8b4a9e819b745d9029c518`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp);
        const { features } = resp;
        const [properties] = features;
        const { properties: { country } } = properties;
        this.setState({
          place: country
        })
      })
  }

  componentDidUpdate() {
    // console.log('My component just updated')
  }
  render() {
    return (
      //passing the state through props from one component to next component
      <>
      {/* <Main
        firstName={this.state.user.name.firstName}
        lastName = {this.state.user.name.lastName}
        latitude = {this.state.latitude}
        longitude = {this.state.longitude}
        place= {this.state.place}
        month={this.state.month.getMonth()}
        error={this.state.error}
        getPosition={this.getPosition}
        handleClick={this.handleClick}
      /> */}
      {/* <SeasonDisplay hemisphere={this.state.hemisphere} month={this.state.month.getMonth()}/> */}
      <Clock/>
      </>
    );
  }
}

export default App;
