import React from 'react';
import IsABunnyOwner from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('IsABunnyOwner', () => {
  const context = {name: 'John'};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {IsABunnyOwner().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders two buttons', () => {
    expect(wrapper.find('input[type="button"]').length).toEqual(2);
  });

  it('dispatches HAS_A_BUNNY when "Yes, I have a bunny!" is clicked', () => {
    wrapper
      .find('input[value="Yes, I have a bunny!"]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'HAS_A_BUNNY'}]);
  });

  it('dispatches HAS_NO_BUNNY when "No, I don\'t have a bunny." is clicked', () => {
    wrapper
      .find('input[value="No, I don\'t have a bunny."]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'HAS_NO_BUNNY'}]);
  });

  it('simply follows an arrow when HAS_NO_BUNNY is dispatched', () => {
    expect(
      IsABunnyOwner().handler({node: {id: 'a'}, action: {type: 'HAS_NO_BUNNY'}}).arrows
    ).toEqual([[['a', 'has no bunny']]]);
  });

  it('simply follows an arrow when HAS_A_BUNNY is dispatched', () => {
    expect(
      IsABunnyOwner().handler({node: {id: 'a'}, action: {type: 'HAS_A_BUNNY'}}).arrows
    ).toEqual([[['a', 'has a bunny']]]);
  });
  
});