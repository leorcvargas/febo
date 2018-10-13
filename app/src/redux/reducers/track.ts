import {
  FETCH_TRACKS,
  CHOOSE_TRACK,
  UPLOAD_TRACK,
  DELETE_TRACK,
} from '../actions/track';

const initialState = {
  list: [],
  uploadResponse: {
    message: '',
    result: {},
    error: false,
  },
  currentTrack: null,
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRACKS: {
      return { ...state, list: action.payload };
    }

    case CHOOSE_TRACK: {
      return { ...state, currentTrack: action.payload };
    }

    case UPLOAD_TRACK: {
      let list = state.list;
      if (!action.payload.error) {
        list = [...list, action.payload.result];
      }

      return { ...state, list, uploadResponse: action.payload };
    }

    case DELETE_TRACK: {
      let list = state.list;
      if (action.payload.result) {
        list = state.list.filter(item => item._id !== action.payload.trackId);
      }

      return { ...state, list, currentTrack: null };
    }

    default: {
      return state;
    }

  }
}
