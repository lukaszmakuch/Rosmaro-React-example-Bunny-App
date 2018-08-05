import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rosmaro from 'rosmaro';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import graph from './graph.json'
import makeBindings from './bindings/index';
import * as bindingUtils from './bindings/utils';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'
import {composeWithDevTools} from 'redux-devtools-extension';
import {makeReducer, effectDispatcher} from 'rosmaro-redux';
import rosmaroComponent from 'rosmaro-react';

const model = rosmaro({
  graph, 
  bindings: makeBindings({utils: bindingUtils})
});

const rootReducer = makeReducer(model);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools({})(
    applyMiddleware(effectDispatcher, sagaMiddleware)
  )
);
sagaMiddleware.run(mySaga);

const App = rosmaroComponent({
  model,
  selector: state => state
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
