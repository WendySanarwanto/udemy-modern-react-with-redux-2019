import { SELECT_SONG } from '../actions';

const selectedSong = (selectedSong = null, action) => {
  if (action.type === SELECT_SONG) {
    return action.payload;
  }

  return selectedSong;
}

export default selectedSong;
