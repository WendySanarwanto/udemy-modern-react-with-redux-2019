import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {

  renderList(songs) {
    return songs.map(song => {
      return (
        <div  className="item" key={ song.title }>
          <div className="right floated content">
            <button className="ui button primary"
                    onClick={ () => this.props.selectSong(song) } >Select</button>
          </div>
          <div className="content">{ song.title }</div>
        </div>
      );
    });
  }

  render() {
    const { songs } = this.props;

    if (!songs) {
      return <div>Loading ...</div>
    }

    return ( 
      <div className="ui divided list">{ this.renderList( songs ) }</div>
    );
  }
};

// Get states from reducers
const mapStateToProps = ( state ) => { 
  console.log(`state:  \n`, state);
  return { songs: state.songs } ;
}

export default connect(mapStateToProps, { selectSong })(SongList);
