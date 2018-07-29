import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rosmaro from 'rosmaro';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import graph from './graph.json'
import makeBindings from './bindings/all';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const appModel = rosmaro({
  graph, 
  bindings: makeBindings({
  })
});

const rootReducer = (stateAndEffect = {state: undefined, effect: undefined}, action) => {
  if (action.type === 'EFFECT') {
      return {state: stateAndEffect.state, effect: undefined};
  }

  const {state: newState, result: {effect}} = appModel({state: stateAndEffect.state, action});
  return {state: newState, effect};
};

const sagaMiddleware = createSagaMiddleware({
  emitter: emit => action => {
   if (action.type === 'EFFECT') emit(action.effect);
  }
})

const effectDispatcher = store => next => action => {
  next(action);
  const {effect} = store.getState();
  if (effect) store.dispatch({type: 'EFFECT', effect});
};

const composeEnhancers = composeWithDevTools({});

let store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(effectDispatcher, sagaMiddleware)
  )
);
sagaMiddleware.run(mySaga);

const App = (state) => appModel({state, action: ({type: 'RENDER'})}).result.data;

const ConnectedApp = connect(
  ({state}) => state,
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
