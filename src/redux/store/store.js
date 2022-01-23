import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import marksReducer from '../marks/marks-reducer';
import modelsReducer from '../models/model-reducer';
import carCardReducer from '../autosCard/auto-reducer';
import calculatorReducer from '../calculator/calculator-reducer';

const store = configureStore({
  reducer: {
    marks: marksReducer,
    models: modelsReducer,
    autos: carCardReducer,
    calc: calculatorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
