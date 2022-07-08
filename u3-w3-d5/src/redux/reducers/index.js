const initialState = {
  album: {
    albumList: {},
    songList: [],
    currentSongInPlayer: {},
    favourites: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        album: {
          ...state.album,
          favourites: [...state.favourites, action.payload],
        },
      };
      case "REMOVE_FAVOURITE":
      return {
        ...state,
        album: {
          ...state.album,
          favourites: [...state.favourites, action.payload],
        },
      };
    
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
      case "GET_SONG":
      return {
        ...state,
        album: {
          ...state.album,
          currentSongInPlayer: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer