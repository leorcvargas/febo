import {
  FETCH_TRACKS,
  CHOOSE_TRACK,
  UPLOAD_TRACK,
  DELETE_TRACK,
  SET_FETCHING_STATUS,
  SET_UPLOADING_STATUS,
} from '../actions/track';

const initialState = {
  list: [],
  uploadResponse: {
    message: '',
    result: {},
    error: false,
  },
  currentTrack: null,
  searchTerm: '',
  isFetching: false,
  isLoading: false,
};

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRACKS: {
      return {
        ...state,
        list: action.payload,
        currentTrack: action.payload[0],
        isFetching: false,
      };
    }

    case CHOOSE_TRACK: {
      return { ...state, currentTrack: action.payload };
    }

    case UPLOAD_TRACK: {
      let list = state.list;
      if (!action.payload.error) {
        list = [...list, action.payload.result];
      }

      return {
        ...state,
        list,
        uploadResponse: action.payload,
        isUploading: false,
      };
    }

    case DELETE_TRACK: {
      let list = state.list;
      if (action.payload.result) {
        list = state.list.filter(item => item._id !== action.payload.trackId);
      }

      return { ...state, list, currentTrack: null };
    }

    case SET_FETCHING_STATUS: {
      return { ...state, isFetching: action.payload };
    }

    case SET_UPLOADING_STATUS: {
      return { ...state, isUploading: action.payload };
    }

    default: {
      return state;
    }

  }
}
