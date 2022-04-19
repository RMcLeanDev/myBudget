import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './actions';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export {store};

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter >
      <Provider store={store}>
        <Component />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}