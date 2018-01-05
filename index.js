import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ad from './Ad';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import { initialState } from './store';

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Ad />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
