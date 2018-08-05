import React from 'react';
import {connect} from 'react-redux';
import {makeHandler} from './../../../utils';

const View = connect()(({dispatch, name}) => 
  <div>
    <p>Please, enter your name.</p>
    <input
      type="text"
      value={name}
      disabled
      />
    <input
      type="button"
      value="Accepting..."
      disabled
      />
  </div>
);

export default () => ({

  handler: makeHandler({

      NAME_ACCEPTED: ({action: {name}}) => ({
        arrow: 'done',
        context: {name},
      }),

      RENDER: ({context}) => <View name={context.name} />,

    })

});