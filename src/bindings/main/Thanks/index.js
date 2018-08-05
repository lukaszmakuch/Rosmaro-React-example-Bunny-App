import React from 'react'
import {connect} from 'react-redux'
import {makeHandler} from './../../utils';

const View = connect()(({name, dispatch}) => 
  <div>
    <p>Thanks, {name}!</p>
    <input
      type="button"
      value="One more time!"
      onClick={() => dispatch({type: 'REPEAT'})}
      />
  </div>
);

export default () => ({

  handler: makeHandler({

    REPEAT: () => ({arrow: 'repeated'}),

    'RENDER': ({context}) => <View name={context.name}/>,

  })

});