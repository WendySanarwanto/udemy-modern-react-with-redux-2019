export const SELECT_SONG = 'SELECT_SONG';

// Action creator
export const selectSong = (song) => {
  return { // 'Select song' Action
    type: SELECT_SONG,
    payload: song
  };
};
