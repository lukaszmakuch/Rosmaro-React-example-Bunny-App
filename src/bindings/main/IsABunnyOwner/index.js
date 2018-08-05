import React from 'react';
import {connect} from 'react-redux';

const View = connect()(({dispatch}) => 
  <div>
    <p>Do you have a bunny?</p>
    <input
      type="button"
      value="Yes, I have a bunny!"
      onClick={() => dispatch({type: 'HAS_A_BUNNY'})}
      />
    <input
      type="button"
      value="No, I don't have a bunny."
      onClick={() => dispatch({type: 'HAS_NO_BUNNY'})}
      />
  </div>
);

export default ({utils: {makeHandler}}) => ({

  handler: makeHandler({

    'HAS_A_BUNNY': () => ({arrow: 'has a bunny'}),

    'HAS_NO_BUNNY': () => ({arrow: 'has no bunny'}),

    'RENDER': () => <View/>,

  })

});