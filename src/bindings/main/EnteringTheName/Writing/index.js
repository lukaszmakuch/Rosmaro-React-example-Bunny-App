import React from 'react';
import {connect} from 'react-redux';
import {makeHandler} from './../../../utils';

const View = connect()(({dispatch, name}) => 
  <div>
    <p>Please, enter your name.</p>
    <input
      type="text"
      value={name}
      onChange={e => dispatch({type: 'TYPE_NAME', name: e.target.value})}
      />
    <input
      type="button"
      value="Done"
      onClick={() => dispatch({type: 'FINISH_ENTERING_THE_NAME'})}
      />
  </div>
);

export default () => ({

  handler: makeHandler({

      TYPE_NAME: ({action, context}) => ({
        arrow: 'typed',
        context: {
          ...context,
          name: action.name
        },
      }),

      FINISH_ENTERING_THE_NAME: ({action, context, node, children}) => ({
        arrow: 'wrote',
        effect: {type: 'CHECK_NAME', name: context.name},
      }),

      RENDER: ({context}) => <View name={context.name} />,

    })

});