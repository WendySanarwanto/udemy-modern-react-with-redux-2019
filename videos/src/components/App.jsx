import React, { Component } from 'react';

import youtube from '../shared/youtube.axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

const YOUTUBE_API_SEARCH_VIDEO_PATH = '/search';

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    // console.log(`this.state.term = ${term}`);
    const response = await youtube.get(YOUTUBE_API_SEARCH_VIDEO_PATH, {
      params: {
        q: term
      }
    });

    let videos = [];
    if (response && response.data && Array.isArray(response.data.items) && response.data.items.length > 0 ) {
      videos = response.data.items;
    }

    this.setState({ videos });

    console.log(`this.state.videos: \n`, this.state.videos);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={ this.onTermSubmit } />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
};

export default App;
