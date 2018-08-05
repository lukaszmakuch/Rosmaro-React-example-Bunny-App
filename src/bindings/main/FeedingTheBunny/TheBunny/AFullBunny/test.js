import React from 'react';
import AFullBunny from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('AFullBunny', () => {
  const context = {};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {AFullBunny().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders a "Go!" button', () => {
    expect(wrapper.find('input[type="button"][value="Go!"]').length).toEqual(1);
  });

  it('dispatches GO when "Go!." is clicked', () => {
    wrapper
      .find('input[value="Go!"]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'GO'}]);
  });

  it('simply follows an arrow when GO is dispatched', () => {
    expect(
      AFullBunny().handler({node: {id: 'a'}, action: {type: 'GO'}}).arrows
    ).toEqual([[['a', 'fed the bunny']]]);
  });
  
});