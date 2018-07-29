import React from 'react'
import {makeHandler} from './utils';
import { connect } from 'react-redux'

const View = connect()(({dispatch}) => <div>
  <p>You don't have a carrot to give to your bunny.</p>
  <input
    type="button"
    value="Look for a carrot"
    onClick={() => dispatch({type: 'LOOK_FOR_A_CARROT'})}
    />
</div>);

export default () => ({

  handler: makeHandler({

    'LOOK_FOR_A_CARROT': () => ({arrow: 'found a carrot'}),

    'RENDER': () => <View/>,

  })

});