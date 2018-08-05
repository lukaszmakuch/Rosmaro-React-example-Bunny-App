import React from 'react';
import Thanks from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Thanks', () => {
  const context = {name: 'John'};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {Thanks().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders Thanks, name', () => {
    expect(wrapper.text()).toContain('Thanks, John');
  });

  it('dispatches REPEAT when "One more time!" is clicked', () => {
    wrapper
      .find('input[value="One more time!"]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'REPEAT'}]);
  });

  it('simply follows an arrow when REPEAT is dispatched', () => {
    expect(
      Thanks().handler({node: {id: 'a'}, action: {type: 'REPEAT'}}).arrows
    ).toEqual([[['a', 'repeated']]]);
  });

});