import ImageList from './ImageList';
import unsplash from '../shared/unsplash.axios'
import React from 'react';
import SearchBar from './SearchBar';

const UNSPLASH_SEARCH_PHOTOS_API_PATH = `/search/photos`;

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(`${UNSPLASH_SEARCH_PHOTOS_API_PATH}`, {
      params: { query: term }
    });

    if (response && response.status === 200) {
      const results = response.data && response.data.results ? response.data.results : [];
      this.setState({ images: results });
    }
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={ this.state.images } />
      </div>
    );
  }
}

export default App;