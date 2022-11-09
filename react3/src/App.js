import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import Card from './Card';
import config from './config';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  onSearchSubmit = async (item) => {
    //i will fetch the api here 
    const ans = {
      ...config,
      params: {
        query: item
      }
    }
    const res = await axios(ans)
    this.setState({
      data: res.data.results
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h5>Found:{this.state.data.length} images</h5>
        <Card data={this.state.data} />
      </div>
    );
  }
}

export default App;
