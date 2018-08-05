import React from 'react';
import Writing from '.';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Writing', () => {
  const context = {name: 'Joh'};
  let wrapper, store;
  beforeEach(() => {
    store = mockStore();
    wrapper = mount(
      <Provider store={store}>
        {Writing().handler({action: {type: 'RENDER'}, context}).result.data}
      </Provider>
    );
  });

  it('renders a text field and a button', () => {
    const field = wrapper.find('input[type="text"]');
    expect(field.length).toEqual(1);
    expect(field.props().value).toEqual('Joh');
    expect(field.props().disabled).toEqual(undefined);
    expect(wrapper.find('input[type="button"][value="Done"]').length).toEqual(1);
  });

  it('dispatches TYPE_NAME when the name is typed', () => {
    wrapper
      .find('input[type="text"]')
      .simulate('change', {target: {value: 'John'}});
    expect(store.getActions()).toEqual([{type: 'TYPE_NAME', name: 'John'}]);
  });

  it('dispatches FINISH_ENTERING_THE_NAME when "Done" is clicked', () => {
    wrapper
      .find('input[value="Done"]')
      .simulate('click');
    expect(store.getActions()).toEqual([{type: 'FINISH_ENTERING_THE_NAME'}]);
  });

  it('simply follows an arrow when FINISH_ENTERING_THE_NAME is dispatched', () => {
    expect(
      Writing().handler({context, node: {id: 'a'}, action: {type: 'FINISH_ENTERING_THE_NAME'}})
    ).toEqual({
      arrows: [[['a', 'wrote']]],
      context,
      result: {
        effect: {type: 'CHECK_NAME', name: 'Joh'}
      }
    });
  });
  
});