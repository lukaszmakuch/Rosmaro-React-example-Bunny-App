import {makeHandler} from './utils';
import React from 'react'

const View = () => <p>
    <span role="img" aria-label="A bunny">🐰</span>
    <span role="img" aria-label="A carrot">🥕</span>
    This is an eating bunny.
  </p>;

export default () => ({

  handler: makeHandler({

    GIVE_THE_CARROT: ({action, context, node, children}) => {
      const ateCarrots = context.ateCarrots + 1;
      const arrow = ateCarrots >= 5
        ? 'ate 5 carrots' 
        : 'ate a carrot';
      return {
        arrow,
        context: {
          ...context,
          ateCarrots
        },
      };
    },

    RENDER: () => <View/>,

  })

});