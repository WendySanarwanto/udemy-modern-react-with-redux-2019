import React, { Component } from 'react';

import { connect } from 'react-redux';

class SongList extends Component {

  renderList(songs) {
    return songs.map(song => {
      return (
        <div  className="item" key={ song.title }>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
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
      <div className="ui  divided list">{ this.renderList( songs ) }</div>
    );
  }
};

// Get states from reducers
const mapStateToProps = ( { songs } ) => { 
  console.log(`songs:  \n`, songs);
  return { songs } ;
}

export default connect(mapStateToProps)(SongList);
