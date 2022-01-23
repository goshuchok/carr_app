import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { getInformation, getTrusted } from './information-action';

const information = createReducer([], {
  [getInformation]: (_, action) => action.payload,
});

const trusted = createReducer([], {
  [getTrusted]: (_, action) => action.payload,
});

export default combineReducers({
  information,
  trusted,
});
