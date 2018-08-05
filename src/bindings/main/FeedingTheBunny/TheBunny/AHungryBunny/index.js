import React from 'react';

const View = () => 
  <p>
    <span role="img" aria-label="A hungry bunny">🐰</span> 
    This is a hungry bunny.
  </p>;

export default ({utils: {makeHandler}}) => ({

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