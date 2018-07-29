import React from 'react'
import {makeHandler} from './utils';

const View = () => <p>
    <span role="img" aria-label="A hungry bunny">🐰</span> 
    This is a hungry bunny.
  </p>;

export default () => ({

  handler: makeHandler({

    GIVE_THE_CARROT: ({context}) => ({
      arrow: 'ate a carrot',
      context: {
        ...context,
        ateCarrots: 1
      },
    }),

    RENDER: () => <View />,

  })

});