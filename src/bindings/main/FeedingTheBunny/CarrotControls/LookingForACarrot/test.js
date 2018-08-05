import React from 'react';
import LookingForACarrot from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('LookingForACarrot', () => {
  const context = {};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {LookingForACarrot().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('dispatches LOOK_FOR_A_CARROT when "Look for a carrot" is clicked', () => {
    wrapper
      .find('input[value="Look for a carrot"]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'LOOK_FOR_A_CARROT'}]);
  });

  it('simply follows an arrow when LOOK_FOR_A_CARROT is dispatched', () => {
    expect(
      LookingForACarrot().handler({node: {id: 'a'}, action: {type: 'LOOK_FOR_A_CARROT'}}).arrows
    ).toEqual([[['a', 'found a carrot']]]);
  });
  
});