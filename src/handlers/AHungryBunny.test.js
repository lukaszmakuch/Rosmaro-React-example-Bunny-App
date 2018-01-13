import React from 'react';
import AHungryBunny from './AHungryBunny';
import {shallow} from 'enzyme';

describe('AHungryBunny', () => {

  it('renders "a hungry bunny"', () => {
    expect(shallow(AHungryBunny.render({})).text()).toContain("a hungry bunny");
  });

  it('sets the number of ate carrots to 1', () => {
    const initCtx = {another: 123, ateCarrots: 7};
    const expectedRes = {
      arrow: 'ate a carrot',
      ctx: {another: 123, ateCarrots: 1}
    };
    const actualRes = AHungryBunny.giveTheCarrot({ctx: initCtx});
    expect(actualRes).toEqual(expectedRes);
  });

});
