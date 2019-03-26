import { combineReducers } from 'redux';

import songs from './songs.reducer';
import selectedSong from './selected-song.reducer';

export default combineReducers({
  songs,
  selectedSong
});