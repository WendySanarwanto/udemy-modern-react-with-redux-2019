import React, { Component } from 'react';

import youtube from '../shared/youtube.axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const YOUTUBE_API_SEARCH_VIDEO_PATH = '/search';
const DEFAULT_TERM = 'reactjs';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    // Set default search to ensure the app showing default results
    this.onTermSubmit(DEFAULT_TERM);
  }

  onTermSubmit = async (term) => {
    // console.log(`this.state.term = ${term}`);
    const response = await youtube.get(YOUTUBE_API_SEARCH_VIDEO_PATH, {
      params: {
        q: term
      }
    });

    if (response && response.data && Array.isArray(response.data.items) && response.data.items.length > 0 ) {
      this.setState({ 
        videos: response.data.items, 
        selectedVideo: response.data.items[0]
      });
    }

    // console.log(`this.state.videos: \n`, this.state.videos);
  }

  onVideoSelect = ( video ) =>{
    console.log(`Selected video: \n`, video);
    this.setState({ selectedVideo: video });    
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={ this.onTermSubmit } />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo }/>
            </div>
            <div className="five wide column">
              <VideoList videos={ this.state.videos } onVideoSelect={ this.onVideoSelect } />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
