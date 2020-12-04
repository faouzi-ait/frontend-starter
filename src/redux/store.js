import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
import { language } from './reducers/language';
import { getTheme } from './reducers/themeReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const combinedReducers = combineReducers({ language, getTheme });

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware()
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
