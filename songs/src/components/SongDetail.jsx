import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div></div>;
  }

  const { title, duration } = song;

  return ( 
    <div className="ui segment">
      <div className="ui header">Details For:</div>
      <p>Title: { title }</p>
      <p>Length: { duration }</p>
    </div>
  );
}

function mapStateToProps( {selectedSong} ) {
  console.log(`selectedSong: \n`, selectedSong);
  return { song: selectedSong };
}

export default connect(mapStateToProps)(SongDetail);
