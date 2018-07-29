import React from 'react'
import {makeHandler} from './utils';
import { connect } from 'react-redux'

const View = connect()(({dispatch}) => <div>
    <p>You have a carrot. You can give it to your bunny.</p>
    <input
      type="button"
      value="Give the carrot"
      onClick={() => dispatch({type: 'GIVE_THE_CARROT'})}
      />
  </div>);

export default () => ({

  handler: makeHandler({

    GIVE_THE_CARROT: () => ({arrow: 'gave the carrot'}),

    'RENDER': () => <View/>

  })

});