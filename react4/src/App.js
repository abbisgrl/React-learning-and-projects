import './App.css';
import React from 'react';
import axios from 'axios';
import Searcher from './components/Searcher';
import Playback from './components/Playback';
import VideoList from './components/VideoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }
  onSearchSubmit = async (item) => {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: item,
        part: 'snippet,id',
        maxResults: '10',
        order: 'date'
      },
      headers: {
        'X-RapidAPI-Key': '7056bd4eadmsh72777e9c4bb93bbp126f13jsn45548d84d765',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };

    const result = await axios.request(options)
    this.setState({
      data:result.data
    })
    console.log(item);
  }

  render() {
    return (
      <div className="App">
        <Searcher onSubmit={this.onSearchSubmit} />
        <Playback />
        {Object.keys(this.state.data).length!==0?<VideoList data={this.state.data} />:'No videos is search'}
      </div>
    );
  }
}

export default App;
