import React from 'react';
import AHungryBunny from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('AHungryBunny', () => {
  const context = {name: 'John'};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {AHungryBunny().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders "a hungry bunny"', () => {
    expect(wrapper.text()).toContain('a hungry bunny');
  });

  it('sets the number of ate carrots to 1', () => {
    const opts = {
      action: {type: 'GIVE_THE_CARROT'}, 
      context: {another: 123, ateCarrots: 7},
      node: {id: 'main:a:b:c'}
    };
    const {context: newContext, arrows} = AHungryBunny().handler(opts);
    expect(arrows).toEqual([[['main:a:b:c', 'ate a carrot']]]);
    expect(newContext).toEqual({another: 123, ateCarrots: 1});
  });
  
});