import React from 'react'
import { connect } from 'react-redux'

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

export default ({utils: {makeHandler}}) => ({

  handler: makeHandler({

    REPEAT: () => ({arrow: 'repeated'}),

    'RENDER': ({context}) => <View name={context.name}/>,

  })

});