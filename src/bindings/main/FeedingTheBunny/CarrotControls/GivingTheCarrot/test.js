import React from 'react';
import GivingTheCarrot from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('GivingTheCarrot', () => {
  const context = {};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {GivingTheCarrot().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('dispatches GIVE_THE_CARROT when "Give the carrot" is clicked', () => {
    wrapper
      .find('input[value="Give the carrot"]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'GIVE_THE_CARROT'}]);
  });

  it('simply follows an arrow when GIVE_THE_CARROT is dispatched', () => {
    expect(
      GivingTheCarrot().handler({node: {id: 'a'}, action: {type: 'GIVE_THE_CARROT'}}).arrows
    ).toEqual([[['a', 'gave the carrot']]]);
  });
  
});