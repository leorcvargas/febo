import {
  FETCH_TRACKS,
  CHOOSE_TRACK,
} from '../actions/track';

const initialState = {
  list: [],
  currentTrack: null,
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_TRACKS:
      return { ...state, list: action.payload.data };

    case CHOOSE_TRACK:
      return { ...state, currentTrack: action.payload };

    default:
      return state;

  }
}
