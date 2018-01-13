import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import makeStorage from 'rosmaro-in-memory-storage';
import makeLock from 'rosmaro-process-wide-lock';
import RosmaroReact from 'rosmaro-react';
import graph from './graph.json'; // The generated graph
import handlers from './handlers/all';
import registerServiceWorker from './registerServiceWorker';

const rosmaroOpts = {
  graph,
  handlers,
  storage: makeStorage(),
  lock: makeLock()
};

ReactDOM.render(<RosmaroReact {...rosmaroOpts} />, document.getElementById('root'));
registerServiceWorker();
