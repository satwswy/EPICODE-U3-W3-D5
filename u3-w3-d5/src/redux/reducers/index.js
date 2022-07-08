const initialState = {
  album: {
    albumList: {},
    songList: [],
    currentSongInPlayer: {},
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALBUM":
      return {
        ...state,
        album: {
          ...state.album,
          albumList: action.payload,
        },
      };
    case "GET_ALBUM_TRACKS":
      return {
        ...state,
        album: {
          ...state.album,
          songList: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer