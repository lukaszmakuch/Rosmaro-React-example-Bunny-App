import React from 'react'
import {makeHandler} from './utils';
import { connect } from 'react-redux'

const View = connect()(({dispatch}) => 
  <div>
    <p>
      <span role="img" aria-label="A full bunny">🐰</span> 
      <span role="img" aria-label="Fireworks">🎆</span>
      The bunny is full. You can go.
    </p>
    <input
      type="button"
      value="Go!"
      onClick={() => dispatch({type: 'GO'})}
      />
  </div>
);

export default () => ({

  handler: makeHandler({

      GO: () => ({arrow: 'fed the bunny'}),

      RENDER: () => <View />
  
  }),

});
