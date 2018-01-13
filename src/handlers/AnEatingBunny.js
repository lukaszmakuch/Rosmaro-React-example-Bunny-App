import React from 'react';

export default {

  giveTheCarrot: ({ctx}) => {
    const ateCarrots = ctx.ateCarrots + 1;
    const arrow = ateCarrots >= 5 
      ? 'ate 5 carrots' 
      : 'ate a carrot';
    return {
      arrow,
      ctx: {
        ...ctx,
        ateCarrots
      }
    };
  },

  render: () => <p>
    <span role="img" aria-label="A bunny">🐰</span>
    <span role="img" aria-label="A carrot">🥕</span>
    This is an eating bunny.
  </p>

};