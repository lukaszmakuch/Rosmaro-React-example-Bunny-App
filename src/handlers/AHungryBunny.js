import React from 'react';

export default {

  giveTheCarrot: ({ctx}) => ({
    arrow: 'ate a carrot',
    ctx: {
      ...ctx,
      ateCarrots: 1
    }
  }),

  render: () => <p>
    <span role="img" aria-label="A hungry bunny">🐰</span> 
    This is a hungry bunny.
  </p>

};