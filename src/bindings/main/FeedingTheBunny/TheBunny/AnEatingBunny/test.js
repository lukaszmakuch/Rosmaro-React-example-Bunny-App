import React from 'react';
import AnEatingBunny from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('AnEatingBunny', () => {
  const context = {name: 'John'};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {AnEatingBunny().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders "eating bunny"', () => {
    expect(wrapper.text()).toContain('eating bunny');
  });

  const testGivingTheCarrot = ({
    context, 
    expected: {arrow: expectedArrow, context: expectedContext}
  }) => () => {
    const opts = {
      action: {type: 'GIVE_THE_CARROT'}, 
      context,
      node: {id: 'main:a:b:c'}
    };
    const {context: newContext, arrows} = AnEatingBunny().handler(opts);
    expect(arrows).toEqual([[['main:a:b:c', expectedArrow]]]);
    expect(newContext).toEqual(expectedContext);
  }

  it('increments the number of ate carrots', testGivingTheCarrot({
    context: {ateCarrots: 1, another: 123},
    expected: {
      arrow: 'ate a carrot',
      context: {ateCarrots: 2, another: 123}
    }
  }));

  it('follows a different arrow when ate at least 5 carrots', testGivingTheCarrot({
    context: {ateCarrots: 4, another: 123},
    expected: {
      arrow: 'ate 5 carrots',
      context: {ateCarrots: 5, another: 123}
    }
  }));

  it('keeps incrementing the number of ate carrots', testGivingTheCarrot({
    context: {ateCarrots: 100, another: 123},
    expected: {
      arrow: 'ate 5 carrots',
      context: {ateCarrots: 101, another: 123}
    }
  }));
  
});