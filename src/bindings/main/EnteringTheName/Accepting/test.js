import React from 'react';
import Accepting from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Accepting', () => {
  const context = {name: 'John'};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {Accepting().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders a text field and a button', () => {
    const field = wrapper.find('input[type="text"]');
    expect(field.length).toEqual(1);
    expect(field.props().value).toEqual('John');
    expect(field.props().disabled).toEqual(true);
    expect(wrapper.find('input[type="button"][value="Accepting..."]').length).toEqual(1);
  });

 
  it('puts the accepted name into the context', () => {
    expect(
      Accepting().handler({context, node: {id: 'a'}, action: {type: 'NAME_ACCEPTED', name: 'Tom'}})
    ).toEqual({
      arrows: [[['a', 'done']]],
      context: {name: 'Tom'},
      result: {}
    });
  });
  
});