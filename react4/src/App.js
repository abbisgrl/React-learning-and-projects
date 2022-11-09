import './App.css';
import React from 'react';
import Searcher from './components/Searcher';
import Playback from './components/Playback';
import VideoList from './components/VideoList';
import youtube from './components/api/youtube';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      selectedVideo: {},
      title:''
    }
  }
  onSearchSubmit = async (item) => {
    const result = await youtube.get('/search', {
      params: {
        q: item
      }
    });

    this.setState({
      data: result.data.items,
      title:item
    })
    // console.log(item);
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }


  render() {
    return (
      <div className="App">
        <Searcher onSubmit={this.onSearchSubmit} />
        <div id='main'>
          <div id='playback'>
            {Object.keys(this.state.selectedVideo).length !== 0 ? <Playback selectedVideo={this.state.selectedVideo} /> : 'Loading...'}
          </div>
          <div id='videolist'>
            {Object.keys(this.state.data).length !== 0 ? <VideoList data={this.state.data} videoSelect={this.onVideoSelect} title={this.state.title}/> : 'Search...'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
