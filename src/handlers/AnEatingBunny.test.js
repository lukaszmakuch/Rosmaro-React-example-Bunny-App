import React from 'react';
import AnEatingBunny from './AnEatingBunny';
import {shallow} from 'enzyme';

describe('AnEatingBunny', () => {

  it('renders "eating bunny"', () => {
    expect(shallow(AnEatingBunny.render({})).text()).toContain("eating bunny");
  });

  const testGivingTheCarrot = ({initCtx, expectedRes}) => () => 
    expect(AnEatingBunny.giveTheCarrot({ctx: initCtx})).toEqual(expectedRes);

  it('increments the number of ate carrots', testGivingTheCarrot({
    initCtx: {ateCarrots: 1, another: 123},
    expectedRes: {
      arrow: 'ate a carrot',
      ctx: {ateCarrots: 2, another: 123}
    }
  }));

  it('follows a different arrow when ate at least 5 carrots', testGivingTheCarrot({
    initCtx: {ateCarrots: 4, another: 123},
    expectedRes: {
      arrow: 'ate 5 carrots',
      ctx: {ateCarrots: 5, another: 123}
    }
  }));

  it('keeps incrementing the number of ate carrots', testGivingTheCarrot({
    initCtx: {ateCarrots: 100, another: 123},
    expectedRes: {
      arrow: 'ate 5 carrots',
      ctx: {ateCarrots: 101, another: 123}
    }
  }));

});
