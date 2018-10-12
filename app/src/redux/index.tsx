import { combineReducers } from 'redux';

import TrackReducer from './reducers/track';

const rootReducer = combineReducers({
  tracks: TrackReducer,
});

export default rootReducer;
