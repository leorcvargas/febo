import {
  FETCH_TRACKS,
  CHOOSE_TRACK,
  UPLOAD_TRACK,
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
  console.log(action);
  switch (action.type) {
    case FETCH_TRACKS: {
      return { ...state, list: action.payload };
    }

    case CHOOSE_TRACK: {
      return { ...state, currentTrack: action.payload };
    }

    case UPLOAD_TRACK: {
      console.log(action);
      let list = state.list;
      if (!action.payload.error) {
        list = [...list, action.payload.result];
      }

      return { ...state, list, uploadResponse: action.payload };
    }

    default: {
      return state;
    }

  }
}
